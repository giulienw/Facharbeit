using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Facharbeit.Backend.Models
{
    public class DBContext : DbContext
    {
        public DbSet<Video> Videos { get; set; } = default!;
        public DbSet<Video> Episodes { get; set; } = default!;
        public DbSet<Video> Genres { get; set; } = default!;
        public DbSet<Video> VideoGenres { get; set; } = default!;

        public DBContext (DbContextOptions<DBContext> options)
            : base(options)
        {
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Facharbeit.Backend.Models.Episode", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Source")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("VideoID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("VideoID");

                    b.ToTable("Episodes");
                });

            modelBuilder.Entity("Facharbeit.Backend.Models.Video", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Cover")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property("USK")
                        .HasColumnType("int");

                    b.Property("VideoType")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Videos");
                });

            modelBuilder.Entity("Facharbeit.Backend.Models.VideoGenre", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<int>("GenreID")
                        .HasColumnType("int");

                    b.Property<int>("VideoID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("VideoID");

                    b.ToTable("VideoGenres");
                });

            modelBuilder.Entity("Facharbeit.Backend.Models.Episode", b =>
                {
                    b.HasOne("Facharbeit.Backend.Models.Video", null)
                        .WithMany("Episodes")
                        .HasForeignKey("VideoID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Facharbeit.Backend.Models.VideoGenre", b =>
                {
                    b.HasOne("Facharbeit.Backend.Models.Video", null)
                        .WithMany("VideoGenres")
                        .HasForeignKey("VideoID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Facharbeit.Backend.Models.Video", b =>
                {
                    b.Navigation("Episodes");

                    b.Navigation("VideoGenres");
                });
            
            modelBuilder.Entity("Facharbeit.Backend.Models.Genre", b =>
            {
                b.Property<int>("ID")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int");

                b.Property<string>("Label")
                    .IsRequired()
                    .HasColumnType("nvarchar(max)");

                b.Property<string>("Name")
                    .IsRequired()
                    .HasColumnType("nvarchar(max)");

                b.HasKey("ID");

                b.ToTable("Genres");
            });
            
            modelBuilder.Entity("Facharbeit.Backend.Models.VideoGenre", b =>
            {
                b.HasOne("Facharbeit.Backend.Models.Video", null)
                    .WithMany("VideoGenres")
                    .HasForeignKey("VideoID")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();
            });
        }
    }
}
