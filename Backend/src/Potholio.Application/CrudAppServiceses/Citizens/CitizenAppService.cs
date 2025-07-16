using Abp.Application.Services;
using Abp.Authorization;
using Abp.IdentityFramework;
using Potholio.Authorization.Users;
using Potholio.CrudAppServiceses.Citizens.DTo;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.Citizens
{
    [AbpAllowAnonymous]
    public class CitizenRegisterAppService : ApplicationService
    {
        private readonly UserManager _userManager;

        public CitizenRegisterAppService(UserManager userManager)
        {
            _userManager = userManager;
        }

        public async Task RegisterAsync(CitizenRegisterDto input)
        {
            var user = ObjectMapper.Map<User>(input);
            user.IsActive = true;
            user.IsEmailConfirmed = true;
            user.TenantId = AbpSession.TenantId;

            var result = await _userManager.CreateAsync(user, input.Password);
            result.CheckErrors(LocalizationManager);

            await CurrentUnitOfWork.SaveChangesAsync();
        }
    }
}
