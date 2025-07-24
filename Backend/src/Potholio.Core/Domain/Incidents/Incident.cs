using Abp.Domain.Entities.Auditing;
using Potholio.Authorization.Users;
using Potholio.Domain.Addresses;
using Potholio.Domain.Municipalities;
using Potholio.Domain.ServiceProviders;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Potholio.Domain.Incidents
{
    public class Incident : FullAuditedEntity<Guid>
    {
        public string? Description { get; set; }
        public string Status { get; set; }
        public string? ImageUrl { get; set; }
        public virtual decimal Latitude { get; set; }
        public virtual decimal Longitude { get; set; }

        public virtual Address incidentAddress { get; set; }

        // Connect reporting uder
        public long ReportingUserId { get; set; }
        [ForeignKey("ReportingUserId")]
        public User ReportingUser { get; set; }

        // Connect the assiged municipality
        public Guid MunicipalityId { get; set; }
        [ForeignKey("MunicipalityId")]
        public Municipality Municipality { get; set; }

        // Connect the service provider
        public Guid? ServiceProviderId { get; set; }
        [ForeignKey("ServiceProviderId")]
        public ServiceProvider serviceProvider { get; set; }
    }
}
