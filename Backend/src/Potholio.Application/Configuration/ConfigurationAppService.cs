using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Potholio.Configuration.Dto;

namespace Potholio.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : PotholioAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
