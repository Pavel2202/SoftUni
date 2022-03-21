namespace SMS.Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class DataConstants
    {
        public const int UsernameMinLength = 5;
        public const int UsernameMaxLength = 20;
        public const int UserPasswordMinLenght = 6;
        public const int UserPasswordMaxLenght = 20;

        public const int ProductMinName = 4;
        public const int ProductMaxName = 20;
        public const decimal ProductMinPrice = 0.05m;
        public const decimal ProductMaxPrice = 1000m;
    }
}
