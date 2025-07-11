using System.ComponentModel.DataAnnotations;

namespace Potholio.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}