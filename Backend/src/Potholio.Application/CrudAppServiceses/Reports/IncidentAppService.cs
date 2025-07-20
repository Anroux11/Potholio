using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Potholio.CrudAppServiceses.Reports.DTo;
using Potholio.Domain.Incidents;
using Potholio.Domain.Municipalities;
using Potholio.Domain.ServiceProviders;
using System;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.Reports
{
    [AbpAuthorize] // will restrict to role "Citizen"
    public class IncidentAppService : AsyncCrudAppService<
    Incident, IncidentDto, Guid>
    {
        private readonly IRepository<Incident, Guid> _incidentRepository;
        private readonly IRepository<Municipality, Guid> _municipalityRepository;
        private readonly IRepository<ServiceProvider, Guid> _serviceProviderRepository;

        public IncidentAppService(IRepository<Incident, Guid> incidentRepository, IRepository<Municipality, Guid> municipality, IRepository<ServiceProvider, Guid> serviceProvider)
            : base(incidentRepository)
        {
            _incidentRepository = incidentRepository;
            _municipalityRepository = municipality;
            _serviceProviderRepository = serviceProvider;
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

        public async Task<Guid> GetServiceProviderIdByNameAsync(string name)
        {
            var serviceprovider = await _serviceProviderRepository.FirstOrDefaultAsync(
                m => m.Name.ToLower() == name.ToLower()
            );

            if (serviceprovider == null)
            {
                Logger.Error($"Service provider with name '{name}' not found.");
                throw new Exception("Service provider not found");
            }

            return serviceprovider.Id;
        }

        public override async Task<IncidentDto> CreateAsync(IncidentDto input)
        {
            var municipalityId = await GetMunicipalityIdByNameAsync(input.MunicipalityName);
            input.MunicipalityId = municipalityId;

            var serviceproviderId = await GetServiceProviderIdByNameAsync(input.ServiceProviderName);
            input.ServiceProviderId = serviceproviderId;

            return await base.CreateAsync(input);
        }

        public override async Task<IncidentDto> UpdateAsync(IncidentDto input)
        {
            var municipalityId = await GetMunicipalityIdByNameAsync(input.MunicipalityName);
            input.MunicipalityId = municipalityId;

            var serviceproviderId = await GetServiceProviderIdByNameAsync(input.ServiceProviderName);
            input.ServiceProviderId = serviceproviderId;

            return await base.UpdateAsync(input);
        }
    }
}
