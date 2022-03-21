namespace FootballManager.Controllers
{
    using FootballManager.Services.Users;
    using FootballManager.ViewModels.Users;
    using MyWebServer.Controllers;
    using MyWebServer.Http;
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

        public UsersController(IUsersService service)
        {
            this.service = service;
        }

        public HttpResponse Login()
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/Players/All");
            }

            return this.View();
        }

        [HttpPost]
        public HttpResponse Login(string username, string password)
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/Players/All");
            }

            var userId = service.GetUserId(username, password);

            if (userId is null)
            {
                return this.Redirect("/Users/Login");
            }

            this.SignIn(userId);

            return this.Redirect("/Players/All");
        }

        public HttpResponse Register()
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/Players/All");
            }

            return this.View();
        }

        [HttpPost]
        public HttpResponse Register(RegisterViewModel model)
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/Players/All");
            }

            if (string.IsNullOrWhiteSpace(model.Username) || model.Username.Length < UsernameMinLength || model.Username.Length > UsernameMaxLength)
            {
                return this.Redirect("/Users/Register");
            }

            if (!service.IsUsernameAvailable(model.Username))
            {
                return this.Redirect("/Users/Register");
            }

            if (string.IsNullOrWhiteSpace(model.Email) || model.Email.Length < UserEmailMinLength || model.Email.Length > UserEmailMaxLength)
            {
                return this.Redirect("/Users/Register");
            }

            if (!Regex.IsMatch(model.Email, @"\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b"))
            {
                return this.Redirect("/Users/Register");
            }

            if (!service.IsEmailAvailable(model.Email))
            {
                return this.Redirect("/Users/Register");
            }

            if (model.Password.Length < UserPasswordMinLength || model.Password.Length > UserPasswordMaxLength)
            {
                return this.Redirect("/Users/Register");
            }

            if (model.Password != model.ConfirmPassword)
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
