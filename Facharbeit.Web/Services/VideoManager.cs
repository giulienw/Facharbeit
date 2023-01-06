using AutoMapper.Internal;
using Facharbeit.Web.Data;
using Facharbeit.Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Facharbeit.Web.Services;

public interface IVideoManager
{
    List<Video> GetAllVideos();
}

public class VideoManager : IVideoManager
{

    private ApplicationDbContext _dbContext;
    private DbSet<Genre> Genres { get { return _dbContext.Set<Genre>(); } }
    private DbSet<VideoGenre> VideoGenres { get { return _dbContext.Set<VideoGenre>(); } }

    public VideoManager(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<Video> GetAllVideos()
    {
        var videos = _dbContext.Videos.ToList();
        videos.ForEach(v => );
    }

    public async Task<Video> GetVideoGenreAsync(int videoID, CancellationToken cancellationToken = default(CancellationToken))
    {
        var query = from videoGenre in VideoGenres
            join genre in Genres on videoGenre.GenreID equals genre.ID
            where videoGenre.VideoID.Equals(videoID)
            select genre;
        return await query.ToListAsync(cancellationToken);
    }
}