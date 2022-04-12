namespace _02._Sets_of_Elements
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            int n = input[0];
            int m = input[1];

            HashSet<int> first = new HashSet<int>();
            HashSet<int> second = new HashSet<int>();

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());

                first.Add(number);
            }

            for (int i = 0; i < m; i++)
            {
                int number = int.Parse(Console.ReadLine());

                second.Add(number);
            }

            HashSet<int> result = new HashSet<int>();

            foreach (var number in first)
            {
                foreach (var num in second)
                {
                    if (number == num)
                    {
                        result.Add(num);
                        break;
                    }
                }
            }

            Console.WriteLine(string.Join(' ', result));
        }
    }
}
