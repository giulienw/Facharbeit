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
[Authorize]
[Route("api/[controller]")]
public class VideoController : ControllerBase
{
    private ILogger<VideoController> _logger { get; set; }
    private VideoManager _videoManager { get; set; }

    public VideoController(ILogger<VideoController> logger, VideoManager videoManager)
    {
        _logger = logger;
        _videoManager = videoManager;
    }

    [HttpPost]
    public async Task<IEnumerable<Video>> GetAllVideos()
    {
        return await _videoManager.GetAllVideos();
    }

    [HttpPost]
    public async Task<Video> GetVideo(int id)
    {
        return await _videoManager.GetVideoByIdAsync(id);
    }
}