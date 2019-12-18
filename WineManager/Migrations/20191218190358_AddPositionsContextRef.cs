using Microsoft.EntityFrameworkCore.Migrations;

namespace WineManager.Migrations
{
    public partial class AddPositionsContextRef : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Slots_Position_PositionId1",
                table: "Slots");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Position",
                table: "Position");

            migrationBuilder.RenameTable(
                name: "Position",
                newName: "Positions");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Positions",
                table: "Positions",
                column: "PositionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Slots_Positions_PositionId1",
                table: "Slots",
                column: "PositionId1",
                principalTable: "Positions",
                principalColumn: "PositionId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Slots_Positions_PositionId1",
                table: "Slots");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Positions",
                table: "Positions");

            migrationBuilder.RenameTable(
                name: "Positions",
                newName: "Position");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Position",
                table: "Position",
                column: "PositionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Slots_Position_PositionId1",
                table: "Slots",
                column: "PositionId1",
                principalTable: "Position",
                principalColumn: "PositionId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
