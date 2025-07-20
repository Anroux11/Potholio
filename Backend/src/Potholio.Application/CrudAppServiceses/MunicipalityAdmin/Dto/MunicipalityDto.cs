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

        public Address Address { get; set; }

        public virtual decimal Latitude { get; set; }
        public virtual decimal Longitude { get; set; }
    }
}
