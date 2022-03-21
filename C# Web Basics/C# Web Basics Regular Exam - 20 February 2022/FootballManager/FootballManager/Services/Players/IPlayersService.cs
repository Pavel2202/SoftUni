namespace FootballManager.Services.Players
{
    using FootballManager.Data.Models;
    using FootballManager.ViewModels.Players;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IPlayersService
    {
        IEnumerable<Player> AllPlayers();

        IEnumerable<Player> CollectionPlayers(string userId);

        void CreatePlayer(AddPlayerViewModel model, string userId);

        void AddToCollection(int playerId, string userId);

        void RemoveFromCollection(int playerId, string userId);
    }
}
