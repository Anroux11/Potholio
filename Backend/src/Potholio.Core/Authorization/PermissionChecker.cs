using Abp.Authorization;
using Potholio.Authorization.Roles;
using Potholio.Authorization.Users;

namespace Potholio.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
