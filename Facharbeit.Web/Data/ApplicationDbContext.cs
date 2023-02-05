using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
//using Facharbeit.Web.Data.Migrations;
using Facharbeit.Web.Models;

namespace Facharbeit.Web.Data;

public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
{
    public virtual DbSet<Video> Videos { get; set; } = null!;
    public virtual DbSet<Genre> Genres { get; set; } = null!;
    public virtual DbSet<VideoGenre> VideoGenres { get; set; } = null!;
    public virtual DbSet<Episode> Episodes { get; set; } = null!;
    public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
        : base(options, operationalStoreOptions)
    {

    }
    
}
