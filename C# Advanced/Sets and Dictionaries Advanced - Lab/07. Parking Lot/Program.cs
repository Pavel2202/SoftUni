namespace _07._Parking_Lot
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            HashSet<string> plates = new HashSet<string>();

            while (true)
            {
                string[] input = Console.ReadLine()
                    .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();

                string command = input[0];

                if (command == "END")
                {
                    break;
                }

                string plate = input[1];

                if (command == "IN")
                {
                    plates.Add(plate);
                }
                else if (command == "OUT")
                {
                    plates.Remove(plate);
                }
            }

            if (plates.Count == 0)
            {
                Console.WriteLine("Parking Lot is Empty");
            }
            else
            {
                foreach (var plate in plates)
                {
                    Console.WriteLine(plate);
                }
            }
        }
    }
}
