using System;
using System.Linq;
using System.Collections.Generic;

namespace SpeedRacing
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            var cars = new Car[n];

            for (int i = 0; i < n; i++)
            {
                var input = Console.ReadLine();

                var tokens = input.Split(new char[0], StringSplitOptions.RemoveEmptyEntries);

                var model = tokens[0];
                var fuelAmount = decimal.Parse(tokens[1]);
                var fuelCost = decimal.Parse(tokens[2]);

                cars[i] = new Car(model, fuelAmount, fuelCost, 0);

            }

            while (true)
            {
                var input = Console.ReadLine();
                var tokens = input.Split(new char[0], StringSplitOptions.RemoveEmptyEntries);

                if (input == "End")
                {
                    break;
                }

                var model = tokens[1];
                var distance = decimal.Parse(tokens[2]);

                cars.Where(c => c.Model == model).ToList().ForEach(c => c.Drive(distance));
            }

            foreach (var car in cars)
            {
                Console.WriteLine($"{car.Model} {car.Fuel:f2} {car.Travelled}");
            }
        }
    }
}
