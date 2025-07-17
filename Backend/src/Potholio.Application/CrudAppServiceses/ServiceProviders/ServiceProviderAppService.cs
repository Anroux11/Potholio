using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.CrudAppServiceses.ServiceProviders.Dto;
using Potholio.Domain.ServiceProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.ServiceProviders
{
    public class ServiceProviderAppService : AsyncCrudAppService<ServiceProvider, ServiceProviderDto, Guid>
    {
        public ServiceProviderAppService(IRepository<ServiceProvider, Guid> repository) : base(repository)
        {
        }
    }
}
