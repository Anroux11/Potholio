using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Abp.UI;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Potholio.Authorization.Users;
using Potholio.CrudAppServiceses.Citizens.DTo;
using Potholio.CrudAppServiceses.Reports;
using Potholio.CrudAppServiceses.ServiceProviders.Dto;
using Potholio.Domain.Municipalities;
using Potholio.Domain.ServiceProviders;
using Potholio.EmailService;
using System;
using System.Threading.Tasks;

namespace Potholio.CrudAppServiceses.ServiceProviders
{
    public class ServiceProviderAppService : AsyncCrudAppService<ServiceProvider, ServiceProviderDto, Guid>
    {
        private readonly IRepository<Municipality, Guid> _municipalityRepository;
        private readonly IRepository<ServiceProvider, Guid> _serviceProviderRepository;
        private readonly UserManager _userManager;
        private readonly ISendGridEmailService _sendGridEmailService;

        public ServiceProviderAppService(IRepository<ServiceProvider, Guid> repository, IRepository<Municipality, Guid> municipalityRepository, UserManager userManager, ISendGridEmailService sendGridEmailService) : base(repository)
        {
            _serviceProviderRepository = repository;
            _municipalityRepository = municipalityRepository;
            _userManager = userManager;
            _sendGridEmailService = sendGridEmailService;
        }

        public async Task<Guid> GetMunicipalityIdByNameAsync(string name)
        {
            var municipality = await _municipalityRepository.FirstOrDefaultAsync(
                m => m.Name.ToLower() == name.ToLower()
            );

            if (municipality == null)
            {
                Logger.Error($"Municipality with name '{name}' not found.");
                throw new Exception("Municipality not found");
            }

            return municipality.Id;
        }

        public override async Task<ServiceProviderDto> CreateAsync(ServiceProviderDto input)
        {
            var municipalityId = await GetMunicipalityIdByNameAsync(input.MunicipalityName);
            input.MunicipalityId = municipalityId;

            var rawPassword = input.Password;

            input.Password = new PasswordHasher<ServiceProviderDto>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(input, input.Password);

            // try to create user of type ServiceProvider
            try
            {
                var register = new RegisterDTo
                {
                    UserName = input.Name,
                    Name = input.Name,
                    Surname = "",
                    EmailAddress = input.Email,
                    Password = rawPassword,
                    roleName = "ServiceProvider"
                };
                var user = ObjectMapper.Map<User>(register);
                user.IsActive = true;
                user.IsEmailConfirmed = true;
                user.TenantId = null;
                var result = await _userManager.CreateAsync(user, rawPassword);
                await _userManager.AddToRoleAsync(user, "ServiceProvider");
                await CurrentUnitOfWork.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw new UserFriendlyException("register failed: ", ex.ToString());
            }

            await _sendGridEmailService.SendEmailAsync(
                   input.Email,
                   "Welcome to Potholio",
                   "<p>You have successfully registered. Thank you!</p>"
               );

            await CurrentUnitOfWork.SaveChangesAsync();

            return await base.CreateAsync(input);
        }

        public override async Task<PagedResultDto<ServiceProviderDto>> GetAllAsync(PagedAndSortedResultRequestDto input)
        {
            var incidents = await _serviceProviderRepository
                .GetAllIncluding(i => i.Address, i => i.Municipality).ToListAsync();
            return await base.GetAllAsync(input);
        }
    }
}
