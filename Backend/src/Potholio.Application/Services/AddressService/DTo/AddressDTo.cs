using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Domain.Addresses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Potholio.Services.AddressService.DTo
{
    [AutoMap(typeof(Address))]
    public class AddressDTo : FullAuditedEntityDto<Guid>
    {
        public string city { get; set; }
        public string province { get; set; }

    }
}
