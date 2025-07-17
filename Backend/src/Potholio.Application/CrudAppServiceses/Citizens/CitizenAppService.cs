using Abp.Application.Services;
using Abp.Authorization;
using Abp.UI;
using Potholio.Authorization.Users;
using Potholio.CrudAppServiceses.Citizens.DTo;
using System;
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
            user.TenantId = null;
            var result = await _userManager.CreateAsync(user, input.Password);
            try
            {
                if (input.roleName == "Citizen")
                {
                    await _userManager.AddToRoleAsync(user, "Citizen");

                }
                else if (input.roleName == "Municipality")
                {
                    await _userManager.AddToRoleAsync(user, "Municipality");
                }
                else if (input.roleName == "ServiceProvider")
                {
                    await _userManager.AddToRoleAsync(user, "ServiceProvider");
                }
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("No Citizen available:", ex.Message);
            }
            await CurrentUnitOfWork.SaveChangesAsync();
        }
    }
}
