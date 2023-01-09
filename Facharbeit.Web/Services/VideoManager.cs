using AutoMapper.Internal;
using Facharbeit.Web.Data;
using Facharbeit.Web.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Facharbeit.Web.Services;

public interface IVideoManager : IDisposable
{
    Task<List<Video>> GetAllVideos(CancellationToken cancellationToken = default(CancellationToken));
    Task<IdentityResult> CreateAsync(Video video, CancellationToken cancellationToken = default(CancellationToken));
    Task<IdentityResult> UpdateAsync(Video video, CancellationToken cancellationToken = default(CancellationToken));
    Task<IdentityResult> DeleteAsync(Video video, CancellationToken cancellationToken = default(CancellationToken));
    Task<Video> GetVideoByIdAsync(int id, CancellationToken cancellationToken = default(CancellationToken));
    Task<Video> GetVideoByNameAsync(string name, CancellationToken cancellationToken = default(CancellationToken));
    Task<List<Genre>> GetGenresAsync(int videoID, CancellationToken cancellationToken = default(CancellationToken));
    Task<List<Genre>> GetGenresAsync(Video video, CancellationToken cancellationToken = default(CancellationToken));
}

public class VideoManager : IVideoManager
{
    private bool _disposed;

    private ApplicationDbContext Context;
    private DbSet<Genre> Genres { get { return Context.Set<Genre>(); } }
    private DbSet<VideoGenre> VideoGenres { get { return Context.Set<VideoGenre>(); } }
    private DbSet<Video> Videos { get { return Context.Set<Video>(); } }

    public IdentityErrorDescriber ErrorDescriber { get; set; }

    public VideoManager(ApplicationDbContext context, IdentityErrorDescriber describer = null)
    {
        if (describer == null)
        {
            throw new ArgumentNullException(nameof(describer));
        }

        ErrorDescriber = describer;

        if (context == null)
        {
            throw new ArgumentNullException(nameof(context));
        }
        Context = context;
    }

    public bool AutoSaveChanges { get; set; } = true;

    protected Task SaveChanges(CancellationToken cancellationToken)
    {
        return AutoSaveChanges ? Context.SaveChangesAsync(cancellationToken) : Task.CompletedTask;
    }

    public async Task<IdentityResult> CreateAsync(Video video, CancellationToken cancellationToken = default(CancellationToken))
    {
        cancellationToken.ThrowIfCancellationRequested();
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }
        Context.Add(video);
        await SaveChanges(cancellationToken);
        return IdentityResult.Success;
    }
    public async Task<IdentityResult> UpdateAsync(Video video, CancellationToken cancellationToken = default(CancellationToken))
    {
        cancellationToken.ThrowIfCancellationRequested();
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }

        Context.Attach(video);
        Context.Update(video);
        try
        {
            await SaveChanges(cancellationToken);
        }
        catch (DbUpdateConcurrencyException)
        {
            return IdentityResult.Failed(ErrorDescriber.ConcurrencyFailure());
        }
        return IdentityResult.Success;
    }

    public async Task<IdentityResult> DeleteAsync(Video video, CancellationToken cancellationToken = default(CancellationToken))
    {
        cancellationToken.ThrowIfCancellationRequested();
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }

        Context.Remove(video);
        try
        {
            await SaveChanges(cancellationToken);
        }
        catch (DbUpdateConcurrencyException)
        {
            return IdentityResult.Failed(ErrorDescriber.ConcurrencyFailure());
        }
        return IdentityResult.Success;
    }

    public async Task<Video> GetVideoByIdAsync(int id, CancellationToken cancellationToken = default(CancellationToken))
    {
        cancellationToken.ThrowIfCancellationRequested();
        ThrowIfDisposed();
        var videos = await Videos.ToListAsync();
        var video = videos.FirstOrDefault(v => v.ID == id);
        video.Genres = await GetGenresAsync(video, cancellationToken);
        return video;
    }

    public async Task<Video?> GetVideoByNameAsync(string Name, CancellationToken cancellationToken = default(CancellationToken))
    {
        cancellationToken.ThrowIfCancellationRequested();
        ThrowIfDisposed();

        var video = (await Videos.ToListAsync()).FirstOrDefault(v => v.Name == Name);
        video.Genres = await GetGenresAsync(video, cancellationToken);
        return video;
    }

    public async Task<List<Video>> GetAllVideos(CancellationToken cancellationToken = default(CancellationToken))
    {
        cancellationToken.ThrowIfCancellationRequested();
        ThrowIfDisposed();

        return await Videos.ToListAsync<Video>(cancellationToken).ConfigureAwait(false);
    }

    public async Task<List<Genre>> GetGenresAsync(int videoID, CancellationToken cancellationToken = default(CancellationToken))
    {
        var query = from videoGenre in VideoGenres
                    join genre in Genres on videoGenre.GenreID equals genre.ID
                    where videoGenre.VideoID.Equals(videoID)
                    select genre;
        return await query.ToListAsync(cancellationToken).ConfigureAwait(false);
    }

    public async Task<List<Genre>> GetGenresAsync(Video video, CancellationToken cancellationToken = default(CancellationToken))
    {
        return await GetGenresAsync(video.ID);
    }


    protected void ThrowIfDisposed()
    {
        if (_disposed)
        {
            throw new ObjectDisposedException(GetType().Name);
        }
    }

    public void Dispose()
    {
        _disposed = true;
    }
}