using Abp.Application.Services;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.UI;
using Potholio.Authorization.Users;
using Potholio.CrudAppServiceses.Citizens.DTo;
using Potholio.EmailService;
using SendGrid;
using System;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.Citizens
{
    [AbpAllowAnonymous]
    public class RegisterAppService : ApplicationService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<User, long> _userRepository;
        private readonly ISendGridEmailService _sendGridEmailService;

        public RegisterAppService(UserManager userManager, ISendGridEmailService sendGrid)
        {
            _userManager = userManager;
            _sendGridEmailService = sendGrid;
        }

        public async Task RegisterAsync(RegisterDTo input)
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

                await _sendGridEmailService.SendEmailAsync(
                    input.EmailAddress,
                    "Welcome to Potholio",
                    "<p>You have successfully registered. Thank you!</p>"
                );

            }
            catch (Exception ex)
            {
                throw new UserFriendlyException("No Citizen available:", ex.Message);
            }
            await CurrentUnitOfWork.SaveChangesAsync();
        }

        public async Task UpdateAsync(User user)
        {
            await _userRepository.UpdateAsync(user);
            await CurrentUnitOfWork.SaveChangesAsync();
        }

        public async Task DeleteAsync(User user)
        {
            await _userRepository.DeleteAsync(user);
            await CurrentUnitOfWork.SaveChangesAsync();
        }
    }
}
