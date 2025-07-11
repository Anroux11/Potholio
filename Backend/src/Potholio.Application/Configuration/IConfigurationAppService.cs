using System.Threading.Tasks;
using Potholio.Configuration.Dto;

namespace Potholio.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
