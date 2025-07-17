using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Potholio.Migrations
{
    /// <inheritdoc />
    public partial class Updated_Incident : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "FK_ServiceProvider_Municipality_MunicipalityId",
                table: "ServiceProvider");

            migrationBuilder.DropTable(
                name: "Geolocation");

            migrationBuilder.DropIndex(
                name: "IX_ServiceProvider_MunicipalityId",
                table: "ServiceProvider");

            migrationBuilder.DropIndex(
                name: "IX_Incidents_GeolocationId",
                table: "Incidents");

            migrationBuilder.DropIndex(
                name: "IX_Incidents_MunicipalityId",
                table: "Incidents");

            migrationBuilder.DropColumn(
                name: "MunicipalityId",
                table: "ServiceProvider");

            migrationBuilder.DropColumn(
                name: "GeolocationId",
                table: "Incidents");

            migrationBuilder.DropColumn(
                name: "MunicipalityId",
                table: "Incidents");

            migrationBuilder.AddColumn<Guid>(
                name: "ServiceProviderId",
                table: "Municipality",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AlterColumn<long>(
                name: "ReportingUserId",
                table: "Incidents",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Latitude",
                table: "Incidents",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Longitude",
                table: "Incidents",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<Guid>(
                name: "MunicipalityId",
                table: "Incidents",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Municipality_ServiceProviderId",
                table: "Municipality",
                column: "ServiceProviderId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_MunicipalityId",
                table: "Incidents",
                column: "MunicipalityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_AbpUsers_ReportingUserId",
                table: "Incidents",
                column: "ReportingUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Incidents_Municipality_MunicipalityId",
                table: "Incidents",
                column: "MunicipalityId",
                principalTable: "Municipality",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Municipality_ServiceProvider_ServiceProviderId",
                table: "Municipality",
                column: "ServiceProviderId",
                principalTable: "ServiceProvider",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_AbpUsers_ReportingUserId",
                table: "Incidents");

            migrationBuilder.DropForeignKey(
                name: "FK_Incidents_Municipality_MunicipalityId",
                table: "Incidents");

            migrationBuilder.DropForeignKey(
                name: "FK_Municipality_ServiceProvider_ServiceProviderId",
                table: "Municipality");

            migrationBuilder.DropIndex(
                name: "IX_Municipality_ServiceProviderId",
                table: "Municipality");

            migrationBuilder.DropIndex(
                name: "IX_Incidents_MunicipalityId",
                table: "Incidents");

            migrationBuilder.DropColumn(
                name: "ServiceProviderId",
                table: "Municipality");

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Incidents");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Incidents");

            migrationBuilder.DropColumn(
                name: "MunicipalityId",
                table: "Incidents");

            migrationBuilder.AddColumn<Guid>(
                name: "MunicipalityId",
                table: "ServiceProvider",
                type: "uuid",
                nullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "ReportingUserId",
                table: "Incidents",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddColumn<Guid>(
                name: "GeolocationId",
                table: "Incidents",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "MunicipalityId",
                table: "Incidents",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Geolocation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    CreationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    LastModificationTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    Latitude = table.Column<decimal>(type: "numeric", nullable: false),
                    Longitude = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Geolocation", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceProvider_MunicipalityId",
                table: "ServiceProvider",
                column: "MunicipalityId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_GeolocationId",
                table: "Incidents",
                column: "GeolocationId");

            migrationBuilder.CreateIndex(
                name: "IX_Incidents_MunicipalityId",
                table: "Incidents",
                column: "MunicipalityId");

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
                name: "FK_ServiceProvider_Municipality_MunicipalityId",
                table: "ServiceProvider",
                column: "MunicipalityId",
                principalTable: "Municipality",
                principalColumn: "Id");
        }
    }
}
