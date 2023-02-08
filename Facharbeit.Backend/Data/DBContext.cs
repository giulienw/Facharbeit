using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Facharbeit.Backend.Models
{
    public class DBContext : DbContext
    {
        public DBContext (DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public DbSet<Video> Videos { get; set; } = default!;
        public DbSet<Video> Episodes { get; set; } = default!;
        public DbSet<Video> Genres { get; set; } = default!;
        public DbSet<Video> VideoGenres { get; set; } = default!;
    }
}
