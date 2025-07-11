using System.Threading.Tasks;
using Potholio.Models.TokenAuth;
using Potholio.Web.Controllers;
using Shouldly;
using Xunit;

namespace Potholio.Web.Tests.Controllers
{
    public class HomeController_Tests: PotholioWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}