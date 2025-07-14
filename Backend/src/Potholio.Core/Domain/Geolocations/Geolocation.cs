using Abp.Domain.Entities.Auditing;
using System;

namespace Potholio.Domain.Geolocations
{
    public class Geolocation : FullAuditedEntity<Guid>
    {
        public virtual double Latitude { get; set; }
        public virtual double Longitude { get; set; }
    }
}
