namespace SMS.Controllers
{
    using MyWebServer.Controllers;
    using MyWebServer.Http;
    using SMS.Services.Home;

    public class HomeController : Controller
    {
        private readonly IHomeService service;

        public HomeController(IHomeService service)
        {
            this.service = service;
        }

        public HttpResponse Index()
        {
            if (this.User.Id != null)
            {
                var model = service.HomePageViewModel(this.User.Id);

                return this.View(model, "IndexLoggedIn");
            }

            return this.View();
        }
    }
}