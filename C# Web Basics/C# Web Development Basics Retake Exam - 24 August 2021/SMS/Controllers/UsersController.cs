namespace SMS.Controllers
{
    using MyWebServer.Controllers;
    using MyWebServer.Http;
    using SMS.Services;
    using SMS.Services.User;
    using SMS.ViewModels.User;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;

    using static Data.DataConstants;

    public class UsersController : Controller
    {
        private readonly IUsersService service;
        private readonly IValidator validator;

        public UsersController(IUsersService service, IValidator validator)
        {
            this.service = service;
            this.validator = validator;
        }

        public HttpResponse Login()
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/");
            }

            return this.View();
        }

        [HttpPost]
        public HttpResponse Login(string username, string password)
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/");
            }

            var userId = service.GetUserId(username, password);

            if (userId is null)
            {
                return this.Redirect("/Users/Login");
            }

            this.SignIn(userId);

            return this.Redirect("/");
        }

        public HttpResponse Register()
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/");
            }

            return this.View();
        }

        [HttpPost]
        public HttpResponse Register(RegisterViewModel model)
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/");
            }

            if (!validator.ValidateUser(model))
            {
                return this.Redirect("/Users/Register");
            }

            service.CreateUser(model.Username, model.Email, model.Password);

            return Redirect("/Users/Login");
        }

        [Authorize]
        public HttpResponse Logout()
        {
            SignOut();

            return Redirect("/");
        }
    }
}
