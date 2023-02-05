using System.ComponentModel.DataAnnotations;
using Facharbeit.Web.Models;
using Facharbeit.Web.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ILogger = Microsoft.Build.Framework.ILogger;

namespace Facharbeit.Web.Controllers;

[ApiController]
[AllowAnonymous]
[Route("api/[controller]")]
public class VideoController : ControllerBase
{
    private ILogger<VideoController> _logger { get; set; }
    private IVideoManager _videoManager { get; set; }

    public VideoController(ILogger<VideoController> logger, IVideoManager videoManager)
    {
        _logger = logger;
        _videoManager = videoManager;
    }

    [HttpGet("Test")]
    public IActionResult Index()
    {
        return Ok("Test");
    }

    [HttpPost("getallvideos")]
    public async Task<IEnumerable<Video>> GetAllVideos()
    {
        return await _videoManager.GetAllVideos();
    }
    
    [HttpGet("create")]
    public async Task CreateVideos()
    {
        var video = new Video
        {
            ID = 0,
            Name = "TestVideo",
            Label = "Test 231",
            USK = USKType.USK6,
            Cover = "img/Test.png",
            Episodes = new List<Episode>()
            {
                new Episode
                {
                    ID = 0,
                    Label = "TestEpisode",
                    Name = "TestEpisode",
                    Source = "videos/video.mp4"
                }
            }
        };
        await _videoManager.CreateAsync(video);
        await _videoManager.AddToGenreAsync(video, "Test");
    }


    [HttpPost("getvideo")]
    public async Task<Video> GetVideo(int id)
    {
        var video = await _videoManager.GetVideoByIdAsync(id);
        return video;
    }
    
    [HttpPost("getvideosbytype")]
    public async Task<List<Video>> GetVideosByType(VideoType type)
    {
        var video = await _videoManager.GetVideosByTypeAsync(type);
        return video;
    }
    
    [HttpPost("create")]
    public async Task Create(Video video)
    {
        await _videoManager.CreateAsync(video);
    }
}