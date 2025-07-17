using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Domain.Addresses;
using Potholio.Domain.Municipalities;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Potholio.CrudAppServiceses.MunicipalityAdmin.Dto
{
    [AutoMap(typeof(Municipality))]
    public class MunicipalityDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        [Phone]
        public string ContactNumber { get; set; }
        public Address Address { get; set; }
        public Guid ServiceProviderId { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [PasswordPropertyText]
        public string Password { get; set; }
    }
}
