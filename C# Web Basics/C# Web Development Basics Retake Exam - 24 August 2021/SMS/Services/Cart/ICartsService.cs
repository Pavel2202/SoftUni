namespace SMS.Services.Cart
{
    using SMS.ViewModels.Cart;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface ICartsService
    {
        void AddProductToCart(string productId, string userId);

        List<DetailsViewModel> CartProducts(string userId);

        void Buy(string userId);
    }
}
