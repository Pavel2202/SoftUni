namespace _03._New_House
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string flowers = Console.ReadLine();
            int countOfFlowers = int.Parse(Console.ReadLine());
            int budget = int.Parse(Console.ReadLine());
            double price = 0;

            switch (flowers)
            {
                case "Roses":
                    price = countOfFlowers * 5;
                    if (countOfFlowers > 80)
                    {
                        price = price - price * 0.10;
                    }
                    break;
                case "Dahlias":
                    price = countOfFlowers * 3.80;
                    if (countOfFlowers > 90)
                    {
                        price = price - price * 0.15;
                    }
                    break;
                case "Tulips":
                    price = countOfFlowers * 2.80;
                    if (countOfFlowers > 80)
                    {
                        price = price - price * 0.15;
                    }
                    break;
                case "Narcissus":
                    price = countOfFlowers * 3;
                    if (countOfFlowers < 120)
                    {
                        price = price + price * 0.15;
                    }
                    break;
                case "Gladiolus":
                    price = countOfFlowers * 2.50;
                    if (countOfFlowers < 80)
                    {
                        price = price + price * 0.20;
                    }
                    break;
            }
            double moneyLeft = budget - price;
            double moneyNeeded = price - budget;
            if (budget >= price)
            {
                Console.WriteLine($"Hey, you have a great garden with {countOfFlowers} {flowers} and {moneyLeft:f2} leva left.");
            }
            else
            {
                Console.WriteLine($"Not enough money, you need {moneyNeeded:f2} leva more.");
            }
        }
    }
}
