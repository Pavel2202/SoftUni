namespace FootballManager.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    using static DataConstants;

    public class Player
    {
        public Player()
        {
            this.UserPlayers = new HashSet<UserPlayer>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(PlayerFullNameMaxLength)]
        public string FullName { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        [MaxLength(PlayerPositionMaxLength)]
        public string Position { get; set; }

        [Required]
        public byte Speed { get; set; }

        [Required]
        public byte Endurance { get; set; }

        [Required]
        [MaxLength(PlayerDescriptionMaxLength)]
        public string Description { get; set; }

        public ICollection<UserPlayer> UserPlayers { get; set; }
    }
}