using Abp.Application.Services;
using Potholio.MultiTenancy.Dto;

namespace Potholio.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

