namespace _03._Largest_3_Numbers
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
                .Split(" ")
                .Select(int.Parse)
                .ToList();

            var sorted = input.OrderByDescending(x => x).Take(3).ToArray();

            Console.WriteLine(string.Join(" ", sorted));
        }
    }
}
