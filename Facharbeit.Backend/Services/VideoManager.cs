using Facharbeit.Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Facharbeit.Backend.Services;

public interface IVideoManager : IDisposable
{
    Task<List<Video>> GetAllVideos();
    Task<IdentityResult> CreateAsync(Video video);
    Task<IdentityResult> CreateGenreAsync(Genre genre);
    Task<IdentityResult> UpdateAsync(Video video);
    Task<IdentityResult> DeleteAsync(Video video);
    Task<Video> GetVideoByIdAsync(int id);
    Task<Video> GetVideoByNameAsync(string name);
    Task<List<Genre>> GetGenresAsync(int videoID);
    Task<List<Genre>> GetGenresAsync(Video video);

    Task<IdentityResult> AddToGenreAsync(Video video, string genreName);

    Task<bool> IsInGenreAsync(Video video, string genreName);
    Task<List<Video>> GetVideosByTypeAsync(VideoType type);
}

public class VideoManager : IVideoManager
{
    private bool _disposed;
    protected virtual CancellationToken CancellationToken => CancellationToken.None;

    private IVideoStore Store;
    

    public VideoManager(IVideoStore store)
    {
        if (store == null)
        {
            throw new ArgumentNullException(nameof(store));
        }
        Store = store;
    }


    public async Task<IdentityResult> CreateAsync(Video video)
    {
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }

        return await Store.CreateAsync(video,CancellationToken);
    }
    
    public async Task<IdentityResult> CreateGenreAsync(Genre genre)
    {
        ThrowIfDisposed();
        if (genre == null)
        {
            throw new ArgumentNullException(nameof(genre));
        }

        return await Store.CreateGenreAsync(genre,CancellationToken);
    }
    
    /*
    public async Task<IdentityResult> CreateEpisodeAsync(Episode episode)
    {
        ThrowIfDisposed();
        if (episode == null)
        {
            throw new ArgumentNullException(nameof(episode));
        }

        return await Store.CreateEpisode(episode);
    }*/
    public async Task<IdentityResult> UpdateAsync(Video video)
    {
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }

        return await Store.UpdateAsync(video,CancellationToken);
    }

    public async Task<IdentityResult> DeleteAsync(Video video)
    {
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }

        return await Store.DeleteAsync(video,CancellationToken);
    }

    public async Task<Video> GetVideoByIdAsync(int id)
    {
        ThrowIfDisposed();

        return await Store.GetVideoByIdAsync(id);
    }

    public async Task<Video?> GetVideoByNameAsync(string name)
    {
        ThrowIfDisposed();
        
        return await Store.GetVideoByNameAsync(name);
    }

    public async Task<List<Video>> GetAllVideos()
    {
        ThrowIfDisposed();

        return await Store.GetAllVideos();
    }

    public async Task<List<Genre>> GetGenresAsync(int videoID)
    {
        return await Store.GetGenresAsync(videoID);
    }

    public async Task<List<Genre>> GetGenresAsync(Video video)
    {
        return await GetGenresAsync(video.ID);
    }
    
    public async Task<IdentityResult> AddToGenreAsync(Video video, string genreName)
    {
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }
        if (string.IsNullOrWhiteSpace(genreName))
        {
            throw new ArgumentException("Value cannot be null or empty.", nameof(genreName));
        }

        await Store.AddToGenreAsync(video, genreName);
        return await Store.UpdateAsync(video);
    }

    /*public async Task<IdentityResult> RemoveFromGenreAsync(Video video, string genreName, CancellationToken cancellationToken = default(CancellationToken))
    {
        cancellationToken.ThrowIfCancellationRequested();
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }
        if (string.IsNullOrWhiteSpace(genreName))
        {
            throw new ArgumentException("Value cannot be null or empty.", nameof(genreName));
        }

        await Store.RemoveFromGenreAsync(video, genreName);
        return await Store.UpdateAsync(video);
    }*/
    public async Task<bool> IsInGenreAsync(Video video, string genreName)
    {
        ThrowIfDisposed();
        if (video == null)
        {
            throw new ArgumentNullException(nameof(video));
        }
        if (string.IsNullOrWhiteSpace(genreName))
        {
            throw new ArgumentException("Value cannot be null or empty.", nameof(genreName));
        }

        return await Store.IsInGenreAsync(video, genreName);
    }

    public async Task<List<Video>> GetVideosByTypeAsync(VideoType type)
    {   ThrowIfDisposed();
        if (type == null)
            throw new ArgumentNullException(nameof(type));

        return await Store.GetVideosByTypeAsync(type, CancellationToken);
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