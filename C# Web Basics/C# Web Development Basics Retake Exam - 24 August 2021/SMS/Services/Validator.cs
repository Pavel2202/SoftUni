namespace SMS.Services
{
    using SMS.Services.User;
    using SMS.ViewModels.Product;
    using SMS.ViewModels.User;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;

    using static Data.DataConstants;

    public class Validator : IValidator
    {
        private readonly IUsersService service;

        public Validator(IUsersService service)
        {
            this.service = service;
        }

        public bool ValidateProduct(CreateProductViewModel model)
        {
            if (model.Name.Length < ProductMinName || model.Name.Length > ProductMaxName)
            {
                return false;
            }

            if (model.Price < ProductMinPrice || model.Price > ProductMaxPrice)
            {
                return false;
            }

            return true;
        }

        public bool ValidateUser(RegisterViewModel model)
        {
            if (string.IsNullOrWhiteSpace(model.Username) || model.Username.Length < UsernameMinLength || model.Username.Length > UsernameMaxLength)
            {
                return false;
            }

            if (!service.IsUsernameAvailable(model.Username))
            {
                return false;
            }

            if (!Regex.IsMatch(model.Email, @"\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b"))
            {
                return false;
            }

            if (!service.IsEmailAvailable(model.Email))
            {
                return false;
            }

            if (model.Password.Length < UserPasswordMinLenght || model.Password.Length > UserPasswordMaxLenght)
            {
                return false;
            }

            if (model.Password != model.ConfirmPassword)
            {
                return false;
            }

            return true;
        }
    }
}
