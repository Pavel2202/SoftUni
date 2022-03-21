namespace FootballManager.Controllers
{
    using MyWebServer.Http;
    using MyWebServer.Controllers;
    public class HomeController : Controller
    {
        public HttpResponse Index()
        {
            if (this.User.Id != null)
            {
                return this.Redirect("/Players/All");
            }

            return View();
        }
    }
}
