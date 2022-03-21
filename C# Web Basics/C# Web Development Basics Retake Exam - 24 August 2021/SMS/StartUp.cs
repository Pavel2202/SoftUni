namespace SMS
{
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using MyWebServer;
    using MyWebServer.Controllers;
    using MyWebServer.Results.Views;
    using SMS.Data;
    using SMS.Services;
    using SMS.Services.Cart;
    using SMS.Services.Home;
    using SMS.Services.Product;
    using SMS.Services.User;

    public class StartUp
    {
        public static async Task Main()
            => await HttpServer
                .WithRoutes(routes => routes
                    .MapStaticFiles()
                    .MapControllers())
                .WithServices(services => services
                    .Add<IViewEngine, CompilationViewEngine>()
                    .Add<SMSDbContext>()
                    .Add<IValidator, Validator>()
                    .Add<IHomeService, HomeService>()
                    .Add<IUsersService, UsersService>()
                    .Add<IProductsService, ProductsService>()
                    .Add<ICartsService, CartsService>())
                .WithConfiguration<SMSDbContext>(context =>
                    context.Database.EnsureCreated())
                .Start();
    }
}