using Abp.Domain.Entities.Auditing;
using Potholio.Authorization.Users;
using Potholio.Domain.Geolocations;
using Potholio.Domain.Municipalities;
using System;

namespace Potholio.Domain.Incidents
{
    public class Incident : FullAuditedEntity<Guid>
    {
        public virtual string? Description { get; set; }
        public virtual string Status { get; set; }
        public virtual Geolocation Geolocation { get; set; }
        public virtual string ImageURL { get; set; }
        public virtual User User { get; set; }
        public virtual Municipality Municipality { get; set; }

    }
}
