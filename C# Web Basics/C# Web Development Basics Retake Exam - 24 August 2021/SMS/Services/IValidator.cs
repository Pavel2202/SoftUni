namespace SMS.Services
{
    using SMS.ViewModels.Product;
    using SMS.ViewModels.User;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IValidator
    {
        bool ValidateUser(RegisterViewModel model);

        bool ValidateProduct(CreateProductViewModel model);
    }
}
