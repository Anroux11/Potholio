using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Potholio.EntityFrameworkCore
{
    public static class PotholioDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<PotholioDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<PotholioDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
