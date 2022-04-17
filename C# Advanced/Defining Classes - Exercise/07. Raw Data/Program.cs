using System;
using System.Linq;
using System.Collections.Generic;

namespace RawData
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            List<Car> cars = new List<Car>();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).ToArray();

                string model = input[0];

                Engine engine = new Engine(int.Parse(input[1]), int.Parse(input[2]));

                Cargo cargo = new Cargo(int.Parse(input[3]), input[4]);

                Tire[] tires = new Tire[]
                {
                    new Tire(double.Parse(input[5]), int.Parse(input[6])),
                    new Tire(double.Parse(input[7]), int.Parse(input[8])),
                    new Tire(double.Parse(input[9]), int.Parse(input[10])),
                    new Tire(double.Parse(input[11]), int.Parse(input[12]))
                };

                Car car = new Car(model, engine, cargo, tires);

                cars.Add(car);
            }

            string type = Console.ReadLine();

            List<Car> filtered = new List<Car>();

            if (type == "fragile")
            {
                filtered = cars
                    .Where(c => c.Cargo.Type == "fragile" && c.Tire.Any(c => c.Pressure < 1))
                    .ToList();
            }
            else if (type == "flamable")
            {
                filtered = cars
                    .Where(c => c.Cargo.Type == "flamable" && c.Engine.Power > 250).ToList();
            }

            foreach (var car in filtered)
            {
                Console.WriteLine(car.Model);
            }
        }
    }
}
