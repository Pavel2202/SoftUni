namespace _04._Fishing_Boat
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int budget = int.Parse(Console.ReadLine());
            string season = Console.ReadLine();
            int fishers = int.Parse(Console.ReadLine());
            double price = 0;
            switch (season)
            {
                case "Spring":
                    price = 3000;
                    if (fishers <= 6)
                    {
                        price = price - price * 0.10;
                    }
                    else if (7 <= fishers && fishers <= 11)
                    {
                        price = price - price * 0.15;
                    }
                    else if (fishers >= 12)
                    {
                        price = price - price * 0.25;
                    }
                    break;
                case "Summer":
                case "Autumn":
                    price = 4200;
                    if (fishers <= 6)
                    {
                        price = price - price * 0.10;
                    }
                    else if (7 <= fishers && fishers <= 11)
                    {
                        price = price - price * 0.15;
                    }
                    else if (fishers >= 12)
                    {
                        price = price - price * 0.25;
                    }
                    break;
                case "Winter":
                    price = 2600;
                    if (fishers <= 6)
                    {
                        price = price - price * 0.10;
                    }
                    else if (7 <= fishers && fishers <= 11)
                    {
                        price = price - price * 0.15;
                    }
                    else if (fishers >= 12)
                    {
                        price = price - price * 0.25;
                    }
                    break;
            }
            if (fishers % 2 == 0 && season != "Autumn")
            {
                price = price - price * 0.05;
            }
            double moneyNeeded = price - budget;
            double moneyLeft = budget - price;
            if (budget >= price)
            {
                Console.WriteLine($"Yes! You have {moneyLeft:f2} leva left.");
            }
            else
            {
                Console.WriteLine($"Not enough money! You need {moneyNeeded:f2} leva.");
            }
        }
    }
}
