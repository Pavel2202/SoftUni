namespace _5._Print_Even_Numbers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Queue<int> numbers = new Queue<int>(input);
            List<int> evenNums = new List<int>();

            while (numbers.Count > 0)
            {
                int num = numbers.Dequeue();
                if (num % 2 == 0)
                {
                    evenNums.Add(num);
                }
            }

            Console.WriteLine(string.Join(", ", evenNums));
        }
    }
}
