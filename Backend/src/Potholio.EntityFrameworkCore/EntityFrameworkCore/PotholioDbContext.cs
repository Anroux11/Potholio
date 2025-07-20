using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Potholio.Authorization.Roles;
using Potholio.Authorization.Users;
using Potholio.MultiTenancy;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System.Linq;
using System;
using Potholio.Domain.Incidents;
using Potholio.Domain.Municipalities;
using Potholio.Domain.Technicians;
using Potholio.Domain.Addresses;
using Potholio.Domain.ServiceProviders;

namespace Potholio.EntityFrameworkCore
{
    public class PotholioDbContext : AbpZeroDbContext<Tenant, Role, User, PotholioDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Incident> Incidents { get; set; }
        public DbSet<Municipality> Municipalities { get; set; }
        public DbSet<ServiceProvider> ServiceProviders { get; set; }
        public DbSet<Technician> Technicians { get; set; }
        public DbSet<Address> Addresses { get; set; }


        public PotholioDbContext(DbContextOptions<PotholioDbContext> options)
            : base(options)
        {
        }
        //Converts datetime
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var dateTimeConverter = new ValueConverter<DateTime, DateTime>(
                v => v.ToUniversalTime(),
                v => DateTime.SpecifyKind(v, DateTimeKind.Utc));

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var properties = entityType.ClrType.GetProperties()
                    .Where(p => p.PropertyType == typeof(DateTime));

                foreach (var property in properties)
                {
                    modelBuilder.Entity(entityType.Name).Property(property.Name)
                        .HasConversion(dateTimeConverter);
                }
            }
        }
    }
}
