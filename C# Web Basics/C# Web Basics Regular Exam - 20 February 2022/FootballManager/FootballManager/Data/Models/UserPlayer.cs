namespace FootballManager.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class UserPlayer
    {
        [Required]
        public string UserId { get; set; }

        public User User { get; set; }

        [Required]
        public int PlayerId { get; set; }

        public Player Player { get; set; }
    }
}