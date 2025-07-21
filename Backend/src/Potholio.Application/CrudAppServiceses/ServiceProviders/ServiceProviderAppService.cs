using Abp.Application.Services;
using Abp.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Potholio.Authorization.Users;
using Potholio.CrudAppServiceses.Reports;
using Potholio.CrudAppServiceses.ServiceProviders.Dto;
using Potholio.Domain.Municipalities;
using Potholio.Domain.ServiceProviders;
using System;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.ServiceProviders
{
    public class ServiceProviderAppService : AsyncCrudAppService<ServiceProvider, ServiceProviderDto, Guid>
    {
        private readonly IRepository<Municipality, Guid> _municipalityRepository;
        private readonly IRepository<ServiceProvider, Guid> _serviceProviderRepository;

        public ServiceProviderAppService(IRepository<ServiceProvider, Guid> repository, IRepository<Municipality, Guid> municipalityRepository) : base(repository)
        {
            _serviceProviderRepository = repository;
            _municipalityRepository = municipalityRepository;
        }

        public async Task<Guid> GetMunicipalityIdByNameAsync(string name)
        {
            var municipality = await _municipalityRepository.FirstOrDefaultAsync(
                m => m.Name.ToLower() == name.ToLower()
            );

            if (municipality == null)
            {
                Logger.Error($"Municipality with name '{name}' not found.");
                throw new Exception("Municipality not found");
            }

            return municipality.Id;
        }

        public override async Task<ServiceProviderDto> CreateAsync(ServiceProviderDto input)
        {
            var municipalityId = await GetMunicipalityIdByNameAsync(input.MunicipalityName);
            input.MunicipalityId = municipalityId;

            input.Password = new PasswordHasher<ServiceProviderDto>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(input, input.Password);

            return await base.CreateAsync(input);
        }
    }
}
