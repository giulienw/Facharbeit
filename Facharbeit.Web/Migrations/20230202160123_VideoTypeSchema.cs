using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Facharbeit.Web.Migrations
{
    /// <inheritdoc />
    public partial class VideoTypeSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "VideoType",
                table: "Videos",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VideoType",
                table: "Videos");
        }
    }
}
