using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Potholio.Controllers
{
    public abstract class PotholioControllerBase: AbpController
    {
        protected PotholioControllerBase()
        {
            LocalizationSourceName = PotholioConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
