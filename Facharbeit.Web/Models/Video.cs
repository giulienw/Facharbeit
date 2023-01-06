namespace Facharbeit.Web.Models;

public interface IVideo
{
    int ID { get; set; }
    string Name { get; set; }
    string Label { get; set; }
    Uri Source { get; set; }
    List<Genre> Genres { get; set; }
    USKType USK { get; set; }
    Uri Cover { get; set; }
}

public class Video : IVideo
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Label { get; set; }
    public Uri Source { get; set; }
    public List<Genre> Genres { get; set; }
    public List<VideoGenre> VideoGenres { get; set; }
    public USKType USK { get; set; }
    public Uri Cover { get; set; }

    public Video()
    {
        Genres = new List<Genre>();
        VideoGenres = new List<VideoGenre>();
    }
}