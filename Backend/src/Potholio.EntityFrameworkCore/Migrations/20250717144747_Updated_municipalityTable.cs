using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Potholio.Migrations
{
    /// <inheritdoc />
    public partial class Updated_municipalityTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EmailAdress",
                table: "Municipalities",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmailAdress",
                table: "Municipalities");
        }
    }
}
