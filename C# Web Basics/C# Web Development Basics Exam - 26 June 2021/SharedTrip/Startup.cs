namespace SharedTrip
{
    using System.Threading.Tasks;

    using MyWebServer;
    using MyWebServer.Controllers;

    using Controllers;
    using MyWebServer.Results.Views;
    using SharedTrip.Data;
    using Microsoft.EntityFrameworkCore;
    using SharedTrip.Services.User;
    using SharedTrip.Services.Trip;

    public class Startup
    {
        public static async Task Main()
            => await HttpServer
                .WithRoutes(routes => routes
                    .MapStaticFiles()
                    .MapControllers())
                .WithServices(services => services
                    .Add<IViewEngine, CompilationViewEngine>()
                    .Add<ApplicationDbContext>()
                    .Add<IUsersService, UsersService>()
                    .Add<ITripsService, TripsService>())
                .WithConfiguration<ApplicationDbContext>(context => 
                    context.Database.EnsureCreated())
                .Start();
    }
}
