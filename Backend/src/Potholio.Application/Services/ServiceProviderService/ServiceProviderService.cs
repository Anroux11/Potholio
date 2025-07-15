using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.Domain.ServiceProviders;
using Potholio.Services.ServiceProviderService.DTo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.ServiceProviderService
{
    public class ServiceProviderService : AsyncCrudAppService<ServiceProvider, ServiceProviderDTo, Guid>
    {
        public ServiceProviderService(IRepository<ServiceProvider, Guid> repository) : base(repository)
        {
        }
    }
}
