﻿namespace FootballManager.Services.Users
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IUsersService
    {
        string CreateUser(string username, string email, string password);

        bool IsEmailAvailable(string email);

        string GetUserId(string username, string password);

        bool IsUsernameAvailable(string username);
    }
}
