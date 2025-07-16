using Abp.Domain.Entities;
using Potholio.Domain.Addresses;
using System;
using System.ComponentModel.DataAnnotations;

namespace Potholio.Domain.ServiceProviders
{
    public class ServiceProvider : Entity<Guid>
    {
        public virtual string Name { get; set; }
        public virtual string Email { get; set; }
        public virtual string Password { get; set; }
        [Phone]
        public virtual int ContactNumber { get; set; }
        public virtual Address Address { get; set; }
    }
}
