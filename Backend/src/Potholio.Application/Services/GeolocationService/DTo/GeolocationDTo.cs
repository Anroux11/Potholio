using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Domain.Geolocations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.GeolocationService.DTo
{
    [AutoMap(typeof(Geolocation))]
    public class GeolocationDTo: FullAuditedEntityDto<Guid>
    {
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
    }
}
