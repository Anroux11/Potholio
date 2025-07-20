using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Potholio.Authorization.Roles;
using Potholio.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
