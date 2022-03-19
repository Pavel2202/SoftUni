namespace _11._Fruit_Shop
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string fruit = Console.ReadLine();
            string day = Console.ReadLine();
            double amount = double.Parse(Console.ReadLine());
            double sum = 0;
            switch (day)
            {
                case "Monday":
                case "Tuesday":
                case "Wednesday":
                case "Thursday":
                case "Friday":
                    switch (fruit)
                    {
                        case "banana":
                            sum = amount * 2.50;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "apple":
                            sum = amount * 1.20;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "orange":
                            sum = amount * 0.85;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "grapefruit":
                            sum = amount * 1.45;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "kiwi":
                            sum = amount * 2.70;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "pineapple":
                            sum = amount * 5.50;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "grapes":
                            sum = amount * 3.85;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        default:
                            Console.WriteLine("error");
                            break;
                    }
                    break;
                case "Saturday":
                case "Sunday":
                    switch (fruit)
                    {
                        case "banana":
                            sum = amount * 2.70;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "apple":
                            sum = amount * 1.25;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "orange":
                            sum = amount * 0.90;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "grapefruit":
                            sum = amount * 1.60;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "kiwi":
                            sum = amount * 3;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "pineapple":
                            sum = amount * 5.60;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        case "grapes":
                            sum = amount * 4.20;
                            Console.WriteLine($"{sum:f2}");
                            break;
                        default:
                            Console.WriteLine("error");
                            break;
                    }
                    break;
                default:
                    Console.WriteLine("error");
                    break;
            }
        }
    }
}
