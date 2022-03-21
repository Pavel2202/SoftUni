namespace SharedTrip.Services.Trip
{
    using System.Collections.Generic;
    using Models;
    using SharedTrip.ViewModels.Trip;

    public interface ITripsService
    {
        IEnumerable<Trip> AllTrips();

        void CreateTrip(AddTripViewModel model, string userId);

        DetailsTripViewModel GetTrip(string tripId);

        bool AddUserToTrip(string tripId, string userId);
    }
}
