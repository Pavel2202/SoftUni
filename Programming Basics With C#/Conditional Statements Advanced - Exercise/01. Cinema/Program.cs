namespace _01._Cinema
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine();
            int rows = int.Parse(Console.ReadLine());
            int colums = int.Parse(Console.ReadLine());
            double income = 0;
            switch (type)
            {
                case "Premiere":
                    income = rows * colums * 12;
                    break;
                case "Normal":
                    income = rows * colums * 7.50;
                    break;
                case "Discount":
                    income = rows * colums * 5;
                    break;
            }
            Console.WriteLine($"{income:f2} leva");
        }
    }
}
