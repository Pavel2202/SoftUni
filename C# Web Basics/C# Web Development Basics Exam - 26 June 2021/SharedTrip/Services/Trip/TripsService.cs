namespace SharedTrip.Services.Trip
{
    using SharedTrip.Data;
    using SharedTrip.Models;
    using SharedTrip.ViewModels.Trip;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class TripsService : ITripsService
    {
        private readonly ApplicationDbContext context;

        public TripsService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public bool AddUserToTrip(string tripId, string userId)
        {
            if (context.UsersTrips.Any(x => x.TripId == tripId && x.UserId == userId))
            {
                return false;
            }

            UserTrip userTrip = new UserTrip()
            {
                TripId = tripId,
                UserId = userId
            };

            context.UsersTrips.Add(userTrip);

            var trip = context.Trips
                .FirstOrDefault(x => x.Id == tripId);

            trip.Seats--;

            context.SaveChanges();

            return true;
        }

        public IEnumerable<Trip> AllTrips()
            => context.Trips.ToList();

        public void CreateTrip(AddTripViewModel model, string userId)
        {
            var departureTime = DateTime.Parse(model.DepartureTime);

            Trip trip = new Trip()
            {
                StartPoint = model.StartPoint,
                EndPoint = model.EndPoint,
                DepartureTime = departureTime,
                ImagePath = model.ImagePath,
                Seats = model.Seats,
                Description = model.Description
            };

            context.Trips.Add(trip);

            UserTrip userTrip = new UserTrip()
            {
                Trip = trip,
                UserId = userId
            };

            context.UsersTrips.Add(userTrip);

            context.SaveChanges();
        }

        public DetailsTripViewModel GetTrip(string tripId)
        {
            var trip = context.Trips
                .Where(x => x.Id == tripId)
                .Select(x => new DetailsTripViewModel()
                {
                    Id = x.Id,
                    StartPoint = x.StartPoint,
                    EndPoint = x.EndPoint,
                    DepartureTime = x.DepartureTime.ToString("g"),
                    Seats = x.Seats,
                    Description = x.Description,
                    ImagePath = x.ImagePath
                }).First();

            return trip;
        }
    }
}
