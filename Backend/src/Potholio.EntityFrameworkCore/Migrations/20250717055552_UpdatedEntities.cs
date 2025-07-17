using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Potholio.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_AbpUsers_UserId",
                table: "Incidents");

            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_Geolocation_GeolocationId",
                table: "Incidents");

            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_Municipality_MunicipalityId",
                table: "Incidents");

            migrationBuilder.DropIndex(
                name: "IX_Incidents_UserId",
                table: "Incidents");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Incidents");

            migrationBuilder.RenameColumn(
                name: "ImageURL",
                table: "Incidents",
                newName: "ImageUrl");

            migrationBuilder.AddColumn<Guid>(
                name: "TechnicianId",
                table: "ServiceProvider",
                type: "uuid",
                nullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "MunicipalityId",
                table: "Incidents",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AlterColumn<Guid>(
                name: "GeolocationId",
                table: "Incidents",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");

            migrationBuilder.AddColumn<long>(
                name: "ReportingUserId",
                table: "Incidents",
                type: "bigint",
                nullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Longitude",
                table: "Geolocation",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "double precision");

            migrationBuilder.AlterColumn<decimal>(
                name: "Latitude",
                table: "Geolocation",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "double precision");

            migrationBuilder.CreateTable(
                name: "Technician",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Password = table.Column<string>(type: "text", nullable: true),
                    ContactNumber = table.Column<int>(type: "integer", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Technician", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceProvider_TechnicianId",
                table: "ServiceProvider",
                column: "TechnicianId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_ReportingUserId",
                table: "Incidents",
                column: "ReportingUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_AbpUsers_ReportingUserId",
                table: "Incidents",
                column: "ReportingUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_Geolocation_GeolocationId",
                table: "Incidents",
                column: "GeolocationId",
                principalTable: "Geolocation",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_Municipality_MunicipalityId",
                table: "Incidents",
                column: "MunicipalityId",
                principalTable: "Municipality",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ServiceProvider_Technician_TechnicianId",
                table: "ServiceProvider",
                column: "TechnicianId",
                principalTable: "Technician",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_AbpUsers_ReportingUserId",
                table: "Incidents");

            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_Geolocation_GeolocationId",
                table: "Incidents");

            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_Municipality_MunicipalityId",
                table: "Incidents");

            migrationBuilder.DropForeignKey(
                name: "FK_ServiceProvider_Technician_TechnicianId",
                table: "ServiceProvider");

            migrationBuilder.DropTable(
                name: "Technician");

            migrationBuilder.DropIndex(
                name: "IX_ServiceProvider_TechnicianId",
                table: "ServiceProvider");

            migrationBuilder.DropIndex(
                name: "IX_Incidents_ReportingUserId",
                table: "Incidents");

            migrationBuilder.DropColumn(
                name: "TechnicianId",
                table: "ServiceProvider");

            migrationBuilder.DropColumn(
                name: "ReportingUserId",
                table: "Incidents");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Incidents",
                newName: "ImageURL");

            migrationBuilder.AlterColumn<Guid>(
                name: "MunicipalityId",
                table: "Incidents",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "GeolocationId",
                table: "Incidents",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Incidents",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AlterColumn<double>(
                name: "Longitude",
                table: "Geolocation",
                type: "double precision",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.AlterColumn<double>(
                name: "Latitude",
                table: "Geolocation",
                type: "double precision",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_UserId",
                table: "Incidents",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_AbpUsers_UserId",
                table: "Incidents",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_Geolocation_GeolocationId",
                table: "Incidents",
                column: "GeolocationId",
                principalTable: "Geolocation",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_Municipality_MunicipalityId",
                table: "Incidents",
                column: "MunicipalityId",
                principalTable: "Municipality",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
