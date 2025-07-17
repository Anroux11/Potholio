using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Potholio.CrudAppServiceses.Reports.DTo;
using Potholio.Domain.Incidents;
using System;

namespace Potholio.CrudAppServiceses.Reports
{
    [AbpAuthorize] // will restrict to role "Citizen"
    public class IncidentAppService : AsyncCrudAppService<
    Incident, IncidentDto, Guid>
    {
        private readonly IRepository<Incident, Guid> _incidentRepository;

        public IncidentAppService(IRepository<Incident, Guid> incidentRepository)
            : base(incidentRepository)
        {
            _incidentRepository = incidentRepository;
        }
    }
}
