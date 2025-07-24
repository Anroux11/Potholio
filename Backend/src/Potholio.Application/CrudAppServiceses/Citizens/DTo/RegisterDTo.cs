using Abp.AutoMapper;
using Potholio.Authorization.Users;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Potholio.CrudAppServiceses.Citizens.DTo
{
    [AutoMap(typeof(User))]
    public class RegisterDTo
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }
        [Required]
        [PasswordPropertyText]
        public string Password { get; set; }
        public string roleName { get; set; }
        //public Role role { get; set; } 
    }
}
