using System;
using System.Collections.Generic;
using System.Text;

namespace SpeedRacing
{
    public class Car
    {
        public string Model { get; set; }

        public decimal Fuel { get; set; }

        public decimal Consumption { get; set; }

        public decimal Travelled { get; set; }

        public Car(string model, decimal fuel, decimal consumption, decimal travelled)
        {
            Model = model;
            Fuel = fuel;
            Consumption = consumption;
            Travelled = 0;
        }


        public void Drive(decimal distance)
        {
            decimal fuelNeeded = distance * Consumption;

            if (fuelNeeded <= Fuel)
            {
                Fuel -= fuelNeeded;
                Travelled += distance;
            }
            else
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
        }
    }
}
