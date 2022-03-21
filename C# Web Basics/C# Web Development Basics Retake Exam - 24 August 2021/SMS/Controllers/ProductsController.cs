namespace SMS.Controllers
{
    using MyWebServer.Controllers;
    using MyWebServer.Http;
    using SMS.Services;
    using SMS.Services.Product;
    using SMS.ViewModels.Product;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class ProductsController : Controller
    {
        private readonly IProductsService service;
        private readonly IValidator validator;

        public ProductsController(IProductsService service, IValidator validator)
        {
            this.service = service;
            this.validator = validator;
        }

        [Authorize]
        public HttpResponse Create()
        {
            return this.View();
        }

        [HttpPost]
        [Authorize]
        public HttpResponse Create(CreateProductViewModel model)
        {
            if (!validator.ValidateProduct(model))
            {
                return this.Redirect("/Products/Create");
            }

            service.Create(model.Name, model.Price);

            return this.Redirect("/");
        }
    }
}
