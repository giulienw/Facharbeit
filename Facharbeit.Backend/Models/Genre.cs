namespace Facharbeit.Backend.Models;

public interface IGenre
{
    int ID { get; set; }
    string Name { get; set; }
    string Label { get; set; }
}

public class Genre : IGenre
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Label { get; set; }
}