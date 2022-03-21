namespace FootballManager.Services.Players
{
    using FootballManager.Data;
    using FootballManager.Data.Models;
    using FootballManager.ViewModels.Players;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class PlayersService : IPlayersService
    {
        private readonly FootballManagerDbContext context;

        public PlayersService(FootballManagerDbContext context)
        {
            this.context = context;
        }

        public void AddToCollection(int playerId, string userId)
        {
            if (context.UsersPlayers.Any(x => x.UserId == userId && x.PlayerId == playerId))
            {
                return;
            }

            UserPlayer userPlayer = new UserPlayer()
            {
                UserId = userId,
                PlayerId = playerId
            };

            context.UsersPlayers.Add(userPlayer);
            context.SaveChanges();
        }

        public IEnumerable<Player> AllPlayers()
            => context.Players.ToList();

        public IEnumerable<Player> CollectionPlayers(string userId)
        {
            return context.UsersPlayers
                .Where(x => x.UserId == userId)
                .Select(x => new Player()
                {
                    Id = x.Player.Id,
                    FullName = x.Player.FullName,
                    ImageUrl = x.Player.ImageUrl,
                    Speed = x.Player.Speed,
                    Endurance = x.Player.Endurance,
                    Position = x.Player.Position,
                    Description = x.Player.Description
                }).ToList();
        }

        public void CreatePlayer(AddPlayerViewModel model, string userId)
        {
            Player player = new Player()
            {
                FullName = model.FullName,
                ImageUrl = model.ImageUrl,
                Position = model.Position,
                Speed = (byte)model.Speed,
                Endurance = (byte)model.Endurance,
                Description = model.Description
            };

            context.Players.Add(player);
            context.SaveChanges();

            UserPlayer userPlayer = new UserPlayer()
            {
                PlayerId = player.Id,
                UserId = userId
            };

            context.UsersPlayers.Add(userPlayer);
            context.SaveChanges();
        }

        public void RemoveFromCollection(int playerId, string userId)
        {
            var userPlayer = context.UsersPlayers
                .FirstOrDefault(x => x.UserId == userId && x.PlayerId == playerId);

            if (userPlayer is null)
            {
                return;
            }

            context.UsersPlayers.Remove(userPlayer);

            context.SaveChanges();
        }
    }
}
