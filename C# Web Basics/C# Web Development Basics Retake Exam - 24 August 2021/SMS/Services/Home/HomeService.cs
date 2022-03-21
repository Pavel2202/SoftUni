namespace SMS.Services.Home
{
    using SMS.Data;
    using SMS.ViewModels.Home;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class HomeService : IHomeService
    {
        private readonly SMSDbContext context;

        public HomeService(SMSDbContext context)
        {
            this.context = context;
        }

        public HomePageViewModel HomePageViewModel(string userId)
        {
            var user = context.Users.FirstOrDefault(u => u.Id == userId);

            var products = context.Products;

            HomePageViewModel model = new HomePageViewModel()
            {
                Username = user.Username,
                Products = products.Select(p => new HomeProductsViewModel()
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price
                }).ToList()
            };

            return model;
        }
    }
}
