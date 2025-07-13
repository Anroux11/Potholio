using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Potholio.Authorization.Roles;
using Potholio.Authorization.Users;
using Potholio.MultiTenancy;

namespace Potholio.EntityFrameworkCore
{
    public class PotholioDbContext : AbpZeroDbContext<Tenant, Role, User, PotholioDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public PotholioDbContext(DbContextOptions<PotholioDbContext> options)
            : base(options)
        {
        }
    }
}
