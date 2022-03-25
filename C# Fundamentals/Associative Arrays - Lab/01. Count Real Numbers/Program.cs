namespace _01._Count_Real_Numbers
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            double[] numbers = Console.ReadLine()
                .Split()
                .Select(double.Parse)
                .ToArray();

            var counts = new SortedDictionary<double, int>();

            foreach (var num in numbers)
            {
                if (counts.ContainsKey(num))
                {
                    counts[num]++;
                }
                else
                {
                    counts[num] = 1;
                }
            }

            foreach (var num in counts)
            {
                Console.WriteLine($"{num.Key} -> {num.Value}");
            }
        }
    }
}
