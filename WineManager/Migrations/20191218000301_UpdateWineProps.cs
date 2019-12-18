using Microsoft.EntityFrameworkCore.Migrations;

namespace WineManager.Migrations
{
    public partial class UpdateWineProps : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Style",
                table: "WineItems",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Style",
                table: "WineItems");
        }
    }
}
