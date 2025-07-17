using Abp.Domain.Entities.Auditing;
using Potholio.Domain.Addresses;
using Potholio.Domain.ServiceProviders;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Potholio.Domain.Municipalities
{
    public class Municipality : FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }

        [Phone]
        public virtual string ContactNumber { get; set; }

        [EmailAddress]
        public virtual string EmailAdress { get; set; }
        public Address Address { get; set; }

        public Guid ServiceProviderId { get; set; }
        [ForeignKey("ServiceProviderId")]
        public virtual ServiceProvider ServiceProvider { get; set; }

    }
}
