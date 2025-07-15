using Abp.Application.Services.Dto;
using Potholio.Domain.Addresses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.ServiceProviderService.DTo
{
    public class ServiceProviderDTo: FullAuditedEntityDto<Guid>
    {
        public virtual string name { get; set; }
        public virtual string email { get; set; }
        public virtual string password { get; set; }
        public virtual string contactNumber { get; set; }
        public virtual Address address { get; set; }
    }
}
