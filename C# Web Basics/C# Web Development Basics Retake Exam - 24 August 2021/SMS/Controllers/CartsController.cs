namespace SMS.Controllers
{
    using MyWebServer.Controllers;
    using MyWebServer.Http;
    using SMS.Services.Cart;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class CartsController : Controller
    {
        private readonly ICartsService service;

        public CartsController(CartsService service)
        {
            this.service = service;
        }

        [Authorize]
        public HttpResponse Details()
        {
            var products = service.CartProducts(this.User.Id);

            return this.View(products);
        }

        [Authorize]
        public HttpResponse AddProduct(string productId)
        {
            service.AddProductToCart(productId, this.User.Id);

            return this.Redirect("/Carts/Details");
        }

        [Authorize]
        public HttpResponse Buy()
        {
            service.Buy(this.User.Id);

            return this.Redirect("/");
        }
    }
}
