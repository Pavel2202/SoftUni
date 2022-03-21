namespace SMS.Services.User
{
    using System;
    using SMS.Data;
    using SMS.Models;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Security.Cryptography;

    public class UsersService : IUsersService
    {
        private readonly SMSDbContext context;

        public UsersService(SMSDbContext context)
        {
            this.context = context;
        }

        public string CreateUser(string username, string email, string password)
        {
            User user = new User
            {
                Username = username,
                Email = email,
                Password = ComputeHash(password)
            };

            context.Users.Add(user);

            Cart cart = new Cart()
            {
                User = user,                
            };

            user.Cart = cart;
            user.CartId = cart.Id;

            context.Carts.Add(cart);

            context.SaveChanges();

            return user.Id;
        }

        public string GetUserId(string username, string password)
        {
            var user = context.Users.FirstOrDefault(x => x.Username == username && x.Password == ComputeHash(password));

            if (user is null)
            {
                return null;
            }

            return user.Id;
        }

        public bool IsEmailAvailable(string email)
        {
            return !context.Users.Any(x => x.Email == email);
        }

        public bool IsUsernameAvailable(string username)
        {
            return !context.Users.Any(x => x.Username == username);
        }

        private static string ComputeHash(string inputString)
        {
            if (string.IsNullOrWhiteSpace(inputString))
            {
                return string.Empty;
            }

            using SHA512 shaM = new SHA512Managed();
            return Convert.ToBase64String(shaM.ComputeHash(Encoding.UTF8.GetBytes(inputString)));
        }
    }
}