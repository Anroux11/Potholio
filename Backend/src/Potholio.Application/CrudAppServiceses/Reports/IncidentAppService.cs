using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Potholio.CrudAppServiceses.Reports.DTo;
using Potholio.Domain.Incidents;
using Potholio.Domain.Municipalities;
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

        public IncidentAppService(IRepository<Incident, Guid> incidentRepository)
            : base(incidentRepository)
        {
            _incidentRepository = incidentRepository;
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
    }
}
