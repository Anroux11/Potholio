using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.CrudAppServiceses.MunicipalityAdmin.Dto;
using Potholio.Domain.Municipalities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.MunicipalityAdmin
{
    public class MunicipalityAppService : AsyncCrudAppService<Municipality, MunicipalityDto, Guid>
    {
        public MunicipalityAppService(IRepository<Municipality, Guid> repository) : base(repository)
        {
        }
    }
}
