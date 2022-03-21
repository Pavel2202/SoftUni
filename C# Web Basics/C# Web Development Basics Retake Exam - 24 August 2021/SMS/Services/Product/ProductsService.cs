namespace SMS.Services.Product
{
    using SMS.Data;
    using SMS.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class ProductsService : IProductsService
    {
        private readonly SMSDbContext context;

        public ProductsService(SMSDbContext context)
        {
            this.context = context;
        }

        public void Create(string name, decimal price)
        {
            Product product = new Product()
            {
                Name = name,
                Price = price
            };

            context.Products.Add(product);

            context.SaveChanges();
        }
    }
}
