namespace SharedTrip.Controllers
{
    using MyWebServer.Controllers;
    using MyWebServer.Http;
    using SharedTrip.Services.Trip;
    using SharedTrip.ViewModels.Trip;
    using System.Linq;

    using static Data.DataConstants;

    public class TripsController : Controller
    {
        private readonly ITripsService service;

        public TripsController(ITripsService service)
        {
            this.service = service;
        }

        [Authorize]
        public HttpResponse All()
        {
            var trips = service.AllTrips();

            return this.View(trips);
        }

        [Authorize]
        public HttpResponse Add()
            => this.View();

       [HttpPost]
       [Authorize]
        public HttpResponse Add(AddTripViewModel model)
        {
            if (model.Seats < TripMinSeats || model.Seats > TripMaxSeats)
            {
                return Error($"Seats should be between {TripMinSeats} and {TripMaxSeats}.");
            }

            if (model.Description.Length > TripDescriptionMaxLength)
            {
                return Error($"Description length should be less than {TripDescriptionMaxLength}.");
            }

            service.CreateTrip(model, this.User.Id);

            return this.Redirect("/Trips/All");
        }

        [Authorize]
        public HttpResponse Details(string tripId)
        {
            var trip = service.GetTrip(tripId);

            return this.View(trip);
        }

        [Authorize]
        public HttpResponse AddUserToTrip(string tripId)
        {
            if (!service.AddUserToTrip(tripId, this.User.Id))
            {
                return this.Redirect($"/Trips/Details?tripId={tripId}");
            }
            else
            {
                return this.Redirect("/Trips/All");
            }
        }
    }
}
