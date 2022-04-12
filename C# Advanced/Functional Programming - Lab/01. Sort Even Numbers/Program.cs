namespace _01._Sort_Even_Numbers
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .Where(x => x % 2 == 0)
                .ToArray();

            input = input.OrderBy(x => x).ToArray();

            Console.WriteLine(string.Join(", ", input));
        }
    }
}
