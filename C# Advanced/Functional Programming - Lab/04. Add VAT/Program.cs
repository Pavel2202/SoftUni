namespace _04._Add_VAT
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            Func<double, double> func = n => n + n * 20 / 100;

            double[] numbers = Console.ReadLine()
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .Select(double.Parse)
                .Select(func)
                .ToArray();

            foreach (var item in numbers)
            {
                Console.WriteLine($"{item:f2}");
            }
        }
    }
}
