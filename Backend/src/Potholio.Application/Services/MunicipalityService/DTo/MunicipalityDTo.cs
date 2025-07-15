using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Authorization.Users;
using Potholio.Domain.Addresses;
using Potholio.Domain.Municipalities;
using Potholio.Domain.ServiceProviders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.MunicipalityService.DTo
{
    [AutoMap(typeof(Municipality))]
    public class MunicipalityDTo: FullAuditedEntityDto<Guid>
    {
        public virtual string name { get; set; }
        public virtual string contactNumber { get; set; }
        public Address address { get; set; }
        public List<User> users { get; set; }
        public virtual ServiceProvider[] serviceProvider { get; set; }
    }
}
