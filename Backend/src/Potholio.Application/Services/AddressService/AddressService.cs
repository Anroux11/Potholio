using Abp.Application.Services;
using Abp.Domain.Repositories;
using Potholio.Domain.Addresses;
using Potholio.Services.AddressService.DTo;
using System;

namespace Potholio.Services.AddressService
{
    public class AddressService : AsyncCrudAppService<Address, AddressDTo, Guid>
    {
        public AddressService(IRepository<Address, Guid> repository) : base(repository)
        {
        }
    }
}
