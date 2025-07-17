using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.ObjectMapping;
using Abp.Runtime.Session;
using Abp.UI;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Potholio.Authorization.Users;
using Potholio.CrudAppServiceses.Citizens.DTo;
using Potholio.CrudAppServiceses.Reports.DTo;
using Potholio.Domain.Geolocations;
using Potholio.Domain.Incidents;
using Potholio.Domain.Municipalities;
using Potholio.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
