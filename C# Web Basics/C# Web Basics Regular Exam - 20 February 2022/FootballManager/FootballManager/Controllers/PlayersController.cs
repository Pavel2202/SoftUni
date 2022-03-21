namespace FootballManager.Controllers
{
    using FootballManager.Services.Players;
    using FootballManager.ViewModels.Players;
    using MyWebServer.Controllers;
    using MyWebServer.Http;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    using static Data.DataConstants;

    public class PlayersController : Controller
    {
        private readonly IPlayersService service;

        public PlayersController(IPlayersService service)
        {
            this.service = service;
        }

        [Authorize]
        public HttpResponse All()
        {
            var players = service.AllPlayers();

            return this.View(players);
        }

        [Authorize]
        public HttpResponse Collection()
        {
            var collectionPlayers = service.CollectionPlayers(this.User.Id);

            return this.View(collectionPlayers);
        }

        [Authorize]
        public HttpResponse Add()
            => this.View();

        [Authorize]
        [HttpPost]
        public HttpResponse Add(AddPlayerViewModel model)
        {
            if (string.IsNullOrWhiteSpace(model.FullName) || 
                model.FullName.Length < PlayerFullNameMinLength || 
                model.FullName.Length > PlayerFullNameMaxLength)
            {
                return this.Redirect("/Players/Add");
            }

            if (string.IsNullOrWhiteSpace(model.ImageUrl))
            {
                return this.Redirect("/Players/Add");
            }

            if (string.IsNullOrWhiteSpace(model.Position) ||
                model.Position.Length < PlayerPositionMinLength ||
                model.Position.Length > PlayerPositionMaxLength)
            {
                return this.Redirect("/Players/Add");
            }

            if (model.Speed < PlayerSpeedMinValue || model.Speed > PlayerSpeedMaxValue)
            {
                return this.Redirect("/Players/Add");
            }

            if (model.Endurance < PlayerEnduranceMinValue || model.Endurance > PlayerEnduranceMaxValue)
            {
                return this.Redirect("/Players/Add");
            }

            if (string.IsNullOrWhiteSpace(model.Description) || model.Description.Length > PlayerDescriptionMaxLength)
            {
                return this.Redirect("/Players/Add");
            }

            service.CreatePlayer(model, this.User.Id);

            return this.Redirect("/Players/All");
        }

        [Authorize]
        public HttpResponse AddToCollection(int playerId)
        {
            service.AddToCollection(playerId, this.User.Id);

            return this.Redirect("/Players/All");
        }

        [Authorize]
        public HttpResponse RemoveFromCollection(int playerId)
        {
            service.RemoveFromCollection(playerId, this.User.Id);

            return this.Redirect("/Players/Collection");
        }
    }
}
