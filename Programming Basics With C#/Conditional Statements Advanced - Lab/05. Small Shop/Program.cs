namespace _05._Small_Shop
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            string town = Console.ReadLine();
            double amount = double.Parse(Console.ReadLine());
            double sum = 0;
            switch (town)
            {
                case "Sofia":
                    switch (product)
                    {
                        case "coffee":
                            sum = amount * 0.5;
                            break;
                        case "water":
                            sum = amount * 0.8;
                            break;
                        case "beer":
                            sum = amount * 1.2;
                            break;
                        case "sweets":
                            sum = amount * 1.45;
                            break;
                        case "peanuts":
                            sum = amount * 1.6;
                            break;
                    }
                    break;
                case "Plovdiv":
                    switch (product)
                    {
                        case "coffee":
                            sum = amount * 0.4;
                            break;
                        case "water":
                            sum = amount * 0.7;
                            break;
                        case "beer":
                            sum = amount * 1.15;
                            break;
                        case "sweets":
                            sum = amount * 1.30;
                            break;
                        case "peanuts":
                            sum = amount * 1.5;
                            break;
                    }
                    break;
                case "Varna":
                    switch (product)
                    {
                        case "coffee":
                            sum = amount * 0.45;
                            break;
                        case "water":
                            sum = amount * 0.7;
                            break;
                        case "beer":
                            sum = amount * 1.10;
                            break;
                        case "sweets":
                            sum = amount * 1.35;
                            break;
                        case "peanuts":
                            sum = amount * 1.55;
                            break;
                    }
                    break;
            }
            Console.WriteLine(sum);
        }
    }
}
