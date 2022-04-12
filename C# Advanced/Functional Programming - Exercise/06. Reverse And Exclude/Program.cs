namespace _06._Reverse_And_Exclude
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();
            int n = int.Parse(Console.ReadLine());

            numbers = numbers.Where(x => x % n != 0).Reverse().ToArray();

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
