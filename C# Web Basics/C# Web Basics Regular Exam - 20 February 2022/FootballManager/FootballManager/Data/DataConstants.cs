namespace FootballManager.Data
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
        public const int UserEmailMinLength = 10;
        public const int UserEmailMaxLength = 60;
        public const int UserPasswordMinLength = 5;
        public const int UserPasswordMaxLength = 20;

        public const int PlayerFullNameMinLength = 5;
        public const int PlayerFullNameMaxLength = 80;
        public const int PlayerPositionMinLength = 5;
        public const int PlayerPositionMaxLength = 20;
        public const int PlayerSpeedMinValue = 0;
        public const int PlayerSpeedMaxValue = 10;
        public const int PlayerEnduranceMinValue = 0;
        public const int PlayerEnduranceMaxValue = 10;
        public const int PlayerDescriptionMaxLength = 200;
    }
}
