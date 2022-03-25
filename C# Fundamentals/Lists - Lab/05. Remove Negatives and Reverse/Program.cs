namespace _05._Remove_Negatives_and_Reverse
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();

            numbers.RemoveAll(n => n < 0);

            if (numbers.Count == 0)
            {
                Console.WriteLine("empty");
            }
            else
            {
                for (int i = numbers.Count - 1; i >= 0; i--)
                {
                    Console.Write($"{numbers[i]} ");
                }
            }
        }
    }
}
