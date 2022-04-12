namespace _01._Count_Same_Values_in_Array
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            Dictionary<string, int> numbers = new Dictionary<string, int>();

            for (int i = 0; i < input.Length; i++)
            {
                string currentNum = input[i];

                if (!numbers.ContainsKey(currentNum))
                {
                    numbers.Add(currentNum, 1);
                }
                else
                {
                    numbers[currentNum]++;
                }
            }

            foreach (var number in numbers)
            {
                Console.WriteLine($"{number.Key} - {number.Value} times");
            }
        }
    }
}
