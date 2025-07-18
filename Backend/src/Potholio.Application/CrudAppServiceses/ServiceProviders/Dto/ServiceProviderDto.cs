using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Domain.Addresses;
using Potholio.Domain.ServiceProviders;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.ServiceProviders.Dto
{
    [AutoMap(typeof(ServiceProvider))]
    public class ServiceProviderDto : EntityDto<Guid>
    {
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [PasswordPropertyText]
        public string Password { get; set; }

        [Phone]
        public string ContactNumber { get; set; }
        public Address Address { get; set; }
        public Guid TechnicianId { get; set; }
    }
}
