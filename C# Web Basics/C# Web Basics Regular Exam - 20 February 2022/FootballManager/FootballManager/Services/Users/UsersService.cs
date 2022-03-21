namespace FootballManager.Services.Users
{
    using FootballManager.Data;
    using FootballManager.Data.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;
    using System.Threading.Tasks;

    public class UsersService : IUsersService
    {
        private readonly FootballManagerDbContext context;

        public UsersService(FootballManagerDbContext context)
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