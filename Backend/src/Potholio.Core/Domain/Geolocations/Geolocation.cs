using Abp.Domain.Entities.Auditing;
using System;

namespace Potholio.Domain.Geolocations
{
    public class Geolocation : FullAuditedEntity<Guid>
    {
        public virtual decimal Latitude { get; set; }
        public virtual decimal Longitude { get; set; }
    }
}
