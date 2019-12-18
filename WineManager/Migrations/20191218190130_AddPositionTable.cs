using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WineManager.Migrations
{
    public partial class AddPositionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PositionId1",
                table: "Slots",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Position",
                columns: table => new
                {
                    PositionId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Position", x => x.PositionId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Slots_PositionId1",
                table: "Slots",
                column: "PositionId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Slots_Position_PositionId1",
                table: "Slots",
                column: "PositionId1",
                principalTable: "Position",
                principalColumn: "PositionId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Slots_Position_PositionId1",
                table: "Slots");

            migrationBuilder.DropTable(
                name: "Position");

            migrationBuilder.DropIndex(
                name: "IX_Slots_PositionId1",
                table: "Slots");

            migrationBuilder.DropColumn(
                name: "PositionId1",
                table: "Slots");
        }
    }
}
