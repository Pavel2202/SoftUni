namespace _05._Orders
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine();
            int count = int.Parse(Console.ReadLine());
            double price = 0;

            switch (product)
            {
                case "coffee":
                    price = 1.50;
                    GetSum(price, count);
                    break;
                case "water":
                    price = 1.00;
                    GetSum(price, count);
                    break;
                case "coke":
                    price = 1.40;
                    GetSum(price, count);
                    break;
                case "snacks":
                    price = 2.00;
                    GetSum(price, count);
                    break;
            }
        }

        static void GetSum(double price, int count)
        {
            double sum = price * count;
            Console.WriteLine($"{sum:f2}");
        }
    }
}
