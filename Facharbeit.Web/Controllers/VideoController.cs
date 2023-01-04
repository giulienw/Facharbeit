using System.ComponentModel.DataAnnotations;
using Facharbeit.Web.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ILogger = Microsoft.Build.Framework.ILogger;

namespace Facharbeit.Web.Controllers;

[ApiController]
[Authorize]
[Route("[controller]")]
public class VideoController : ControllerBase
{
    private ILogger<VideoController> _logger { get; set; }

    public VideoController(ILogger<VideoController> logger)
    {
        _logger = logger;
    }

    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
    }
}