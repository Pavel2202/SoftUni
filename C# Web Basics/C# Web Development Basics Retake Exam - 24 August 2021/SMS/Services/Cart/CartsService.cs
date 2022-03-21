namespace SMS.Services.Cart
{
    using SMS.Models;
    using SMS.Data;
    using SMS.ViewModels.Cart;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class CartsService : ICartsService
    {
        private readonly SMSDbContext context;

        public CartsService(SMSDbContext context)
        {
            this.context = context;
        }

        public void AddProductToCart(string productId, string userId)
        {
            var cart = context.Carts.FirstOrDefault(c => c.User.Id == userId);

            var product = context.Products.FirstOrDefault(p => p.Id == productId);

            cart.Products.Add(product);

            product.CartId = cart.Id;

            context.SaveChanges();
        }

        public void Buy(string userId)
        {
            var cartProducts = GetCartProducts(userId);

            var cart = context.Carts.FirstOrDefault(c => c.User.Id == userId);

            foreach (var product in cartProducts)
            {
                cart.Products.Remove(product);
                context.Products.Remove(product);
            }

            context.SaveChanges();
        }

        public List<DetailsViewModel> CartProducts(string userId)
        {
            var products = GetCartProducts(userId)
                .Select(p => new DetailsViewModel()
                {
                    Name = p.Name,
                    Price = p.Price
                }).ToList();

            return products;
        }

        private List<Product> GetCartProducts(string userId)
        {
            var user = context.Users.FirstOrDefault(u => u.Id == userId);

            var cartId = user.CartId;

            var products = context.Products
                .Where(p => p.CartId == cartId).ToList();

            return products;
        }
    }
}
