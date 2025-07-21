using Abp.Authorization;
using Abp.Authorization.Roles;
using Abp.Authorization.Users;
using Abp.MultiTenancy;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Potholio.Authorization;
using Potholio.Authorization.Roles;
using Potholio.Authorization.Users;
using Potholio.Domain.Addresses;
using Potholio.Domain.Municipalities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Potholio.EntityFrameworkCore.Seed.Host
{
    public class HostRoleAndUserCreator
    {
        private readonly PotholioDbContext _context;

        public HostRoleAndUserCreator(PotholioDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateHostRoleAndUsers();
        }

        private void CreateHostRoleAndUsers()
        {
            // Admin role for host

            var adminRoleForHost = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.Admin);
            if (adminRoleForHost == null)
            {
                adminRoleForHost = _context.Roles.Add(new Role(null, StaticRoleNames.Host.Admin, StaticRoleNames.Host.Admin) { IsStatic = true, IsDefault = true }).Entity;
                _context.SaveChanges();
            }

            // Citizen role

            var citizenRole = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == "Citizen");
            if (citizenRole == null)
            {
                citizenRole = _context.Roles.Add(new Role(null, "Citizen", "Citizen") { IsStatic = true }).Entity;
                _context.SaveChanges();
            }

            // Municipality role

            var MunicipalityRole = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == "Municipality");
            if (MunicipalityRole == null)
            {
                MunicipalityRole = _context.Roles.Add(new Role(null, "Municipality", "Municipality") { IsStatic = true }).Entity;
                _context.SaveChanges();
            }

            // ServiceProvider role

            var ServiceProviderRole = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == "ServiceProvider");
            if (ServiceProviderRole == null)
            {
                ServiceProviderRole = _context.Roles.Add(new Role(null, "ServiceProvider", "ServiceProvider") { IsStatic = true }).Entity;
                _context.SaveChanges();
            }


            // Grant all permissions to admin role for host

            var grantedPermissions = _context.Permissions.IgnoreQueryFilters()
                .OfType<RolePermissionSetting>()
                .Where(p => p.TenantId == null && p.RoleId == adminRoleForHost.Id)
                .Select(p => p.Name)
                .ToList();

            var permissions = PermissionFinder
                .GetAllPermissions(new PotholioAuthorizationProvider())
                .Where(p => p.MultiTenancySides.HasFlag(MultiTenancySides.Host) &&
                            !grantedPermissions.Contains(p.Name))
                .ToList();

            if (permissions.Any())
            {
                _context.Permissions.AddRange(
                    permissions.Select(permission => new RolePermissionSetting
                    {
                        TenantId = null,
                        Name = permission.Name,
                        IsGranted = true,
                        RoleId = adminRoleForHost.Id
                    })
                );
                _context.SaveChanges();
            }

            // Admin user for host

            var adminUserForHost = _context.Users.IgnoreQueryFilters().FirstOrDefault(u => u.TenantId == null && u.UserName == AbpUserBase.AdminUserName);
            if (adminUserForHost == null)
            {
                var user = new User
                {
                    TenantId = null,
                    UserName = AbpUserBase.AdminUserName,
                    Name = "admin",
                    Surname = "admin",
                    EmailAddress = "admin@aspnetboilerplate.com",
                    IsEmailConfirmed = true,
                    IsActive = true
                };

                user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
                user.SetNormalizedNames();

                adminUserForHost = _context.Users.Add(user).Entity;
                _context.SaveChanges();

                // Assign Admin role to admin user
                _context.UserRoles.Add(new UserRole(null, adminUserForHost.Id, adminRoleForHost.Id));
                _context.SaveChanges();

                // Seeding municipalities
                var gautengMunicipalities = new List<Municipality>
                {
                    new Municipality { Name = "City of Johannesburg Metropolitan Municipality", Address = new Address { City = "Johannesburg", Province = "Gauteng" }, Latitude = -26.1767M, Longitude = 27.9635M }, 
                    new Municipality { Name = "City of Tshwane Metropolitan Municipality", Address = new Address { City = "Pretoria", Province = "Gauteng" }, Latitude = -25.7479M, Longitude = 28.2293M }, 
                    new Municipality { Name = "City of Ekurhuleni Metropolitan Municipality", Address = new Address { City = "Germiston", Province = "Gauteng" }, Latitude = -26.2361M, Longitude = 28.1825M }, 
                    new Municipality { Name = "Sedibeng District Municipality", Address = new Address { City = "Vanderbijlpark", Province = "Gauteng" }, Latitude = -26.7066M, Longitude = 27.8272M }, 
                    new Municipality { Name = "West Rand District Municipality", Address = new Address { City = "Krugersdorp", Province = "Gauteng" }, Latitude = -26.1043M, Longitude = 27.7134M }

                };

                foreach (var municipality in gautengMunicipalities)
                {
                    if (!_context.Municipalities.Any(m => m.Name == municipality.Name))
                    {
                        Console.WriteLine($"Seeding municipality: {municipality.Name}");
                        _context.Municipalities.Add(municipality);
                    }
                }
                _context.SaveChanges();
            }
        }
    }
}
