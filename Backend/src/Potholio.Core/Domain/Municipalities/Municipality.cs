using Abp.Domain.Entities.Auditing;
using Potholio.Authorization.Users;
using Potholio.Domain.Addresses;
using Potholio.Domain.ServiceProviders;
using System;
using System.Collections.Generic;

namespace Potholio.Domain.Municipalities
{
    public class Municipality : FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }
        public virtual string ContactNumber { get; set; }
        public Address Address { get; set; }
        public List<User> Users { get; set; }
        public virtual ServiceProvider[] ServiceProvider { get; set; }
    }
}
