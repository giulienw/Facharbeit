namespace Facharbeit.Backend.Models;

public interface IEpisode
{
    int ID { get; set; }
    string Name { get; set; }
    string Label { get; set; }
    string Source { get; set; }
}

public class Episode : IEpisode
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Label { get; set; }
    public string Source { get; set; }
    public int VideoID { get; set; } 
}