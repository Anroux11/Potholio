using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Potholio.EntityFrameworkCore;
using Potholio.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Potholio.Web.Tests
{
    [DependsOn(
        typeof(PotholioWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class PotholioWebTestModule : AbpModule
    {
        public PotholioWebTestModule(PotholioEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(PotholioWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(PotholioWebMvcModule).Assembly);
        }
    }
}