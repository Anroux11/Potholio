using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.Domain.Geolocations;
using Potholio.Services.GeolocationService.DTo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.GeolocationService
{
    public class GeolocationService : CrudAppService<Geolocation, GeolocationDTo, Guid>
    {
        public GeolocationService(IRepository<Geolocation, Guid> repository) : base(repository)
        {
        }
    }
}
