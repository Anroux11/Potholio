using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Authorization.Users;
using Potholio.Domain.Geolocations;
using Potholio.Domain.Incidents;
using Potholio.Domain.Municipalities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.IncidentService.DTo
{
    [AutoMap(typeof(Incident))]
    public class IncidentDTo: FullAuditedEntityDto<Guid>
    {
        public virtual string? description { get; set; }
        public virtual string status { get; set; }
        public virtual Geolocation geolocation { get; set; }
        public virtual string imageURL { get; set; }
        public virtual User user { get; set; }
        public virtual Municipality municipality { get; set; }
    }
}
