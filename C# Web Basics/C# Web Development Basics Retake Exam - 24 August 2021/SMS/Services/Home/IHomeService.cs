namespace SMS.Services.Home
{
    using SMS.ViewModels.Home;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IHomeService
    {
        HomePageViewModel HomePageViewModel(string userId);
    }
}
