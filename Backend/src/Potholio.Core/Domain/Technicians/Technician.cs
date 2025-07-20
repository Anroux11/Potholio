using Abp.Domain.Entities.Auditing;
using Potholio.Domain.ServiceProviders;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Potholio.Domain.Technicians
{
    public class Technician : FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }

        [EmailAddress]
        public virtual string Email { get; set; }

        [PasswordPropertyText]
        public virtual string Password { get; set; }

        [Phone]
        public virtual int ContactNumber { get; set; }

        // connect service provider
        public Guid ServiceProviderId { get; set; }
        [ForeignKey("ServiceProviderId")]
        public virtual ServiceProvider ServiceProvider { get; set; }
    }
}
