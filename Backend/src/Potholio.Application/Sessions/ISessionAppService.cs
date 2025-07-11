using System.Threading.Tasks;
using Abp.Application.Services;
using Potholio.Sessions.Dto;

namespace Potholio.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
