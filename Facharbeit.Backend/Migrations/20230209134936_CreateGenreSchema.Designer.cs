﻿// <auto-generated />
using Facharbeit.Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Facharbeit.Backend.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20230209134936_CreateGenreSchema")]
    partial class CreateGenreSchema
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

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

                    b.Property<int>("USK")
                        .HasColumnType("int");

                    b.Property<int>("VideoType")
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
#pragma warning restore 612, 618
        }
    }
}
