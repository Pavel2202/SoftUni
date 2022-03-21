namespace SMS.ViewModels.Home
{
    using SMS.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class HomePageViewModel
    {
        public string Username { get; set; }

        public List<HomeProductsViewModel> Products { get; set; }
    }
}
