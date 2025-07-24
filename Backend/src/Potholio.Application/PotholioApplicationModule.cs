using Abp.AutoMapper;
using Abp.Events.Bus.Handlers;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Potholio.Authorization;
//using Potholio.EventBus;

namespace Potholio
{
    [DependsOn(
        typeof(PotholioCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class PotholioApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<PotholioAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(PotholioApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );

        }

        //public override void PostInitialize()
        //{
        //    var eventBus = IocManager.Resolve<IEventBus>();
        //    var handler = IocManager.Resolve<ServiceProviderEventHandler>();

        //    eventBus.Subscribe<ServiceProviderCreatedEvent>(handler.Handle);

        //}
    }
}
