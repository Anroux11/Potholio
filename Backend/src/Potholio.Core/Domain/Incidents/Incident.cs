using Abp.Domain.Entities.Auditing;
using Potholio.Authorization.Users;
using Potholio.Domain.Municipalities;
using Potholio.Enums;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Potholio.Domain.Incidents
{
    public class Incident : FullAuditedEntity<Guid>
    {
        public string Description { get; set; }
        public Status Status { get; set; }
        public string ImageUrl { get; set; }
        public virtual decimal Latitude { get; set; }
        public virtual decimal Longitude { get; set; }

        public long ReportingUserId { get; set; }
        [ForeignKey("ReportingUserId")]
        public User ReportingUser { get; set; }

        public Guid MunicipalityId { get; set; }
        [ForeignKey("MunicipalityId")]
        public Municipality Municipality { get; set; }
    }
}
