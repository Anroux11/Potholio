using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using Potholio.Domain.Addresses;
using Potholio.Domain.Technicians;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Potholio.Domain.ServiceProviders
{
    public class ServiceProvider : FullAuditedEntity<Guid>
    {
        public virtual string Name { get; set; }

        [EmailAddress]
        public virtual string Email { get; set; }

        [PasswordPropertyText]
        public virtual string Password { get; set; }

        [Phone]
        public virtual int ContactNumber { get; set; }
        public virtual Address Address { get; set; }

        public virtual Technician Technician { get; set; }
    }
}
