using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.Domain.Incidents;
using Potholio.Services.IncidentService.DTo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.IncidentService
{
    public class IncidentService : AsyncCrudAppService<Incident, IncidentDTo, Guid>
    {
        public IncidentService(IRepository<Incident, Guid> repository) : base(repository)
        {
        }
    }
}
