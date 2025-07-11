using System.Threading.Tasks;
using Abp.Application.Services;
using Potholio.Authorization.Accounts.Dto;

namespace Potholio.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
