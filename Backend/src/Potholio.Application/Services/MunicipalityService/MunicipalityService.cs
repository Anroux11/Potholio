using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.Domain.Municipalities;
using Potholio.Services.MunicipalityService.DTo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.MunicipalityService
{
    public class MunicipalityService : AsyncCrudAppService<Municipality, MunicipalityDTo, Guid>
    {
        public MunicipalityService(IRepository<Municipality, Guid> repository) : base(repository)
        {
        }
    }
}
