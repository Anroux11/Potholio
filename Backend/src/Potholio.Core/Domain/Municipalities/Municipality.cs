using Abp.Domain.Entities.Auditing;
using Potholio.Domain.Addresses;
using System;
using System.ComponentModel.DataAnnotations;

namespace Potholio.Domain.Municipalities
{
    public class Municipality : FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }

        public Address Address { get; set; }

        public virtual decimal Latitude { get; set; }
        public virtual decimal Longitude { get; set; }

    }
}
