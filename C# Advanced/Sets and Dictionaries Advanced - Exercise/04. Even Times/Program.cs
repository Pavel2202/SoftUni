namespace _04._Even_Times
{
    using System;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Dictionary<string, int> numbers = new Dictionary<string, int>();

            for (int i = 0; i < n; i++)
            {
                string num = Console.ReadLine();
                if (!numbers.ContainsKey(num))
                {
                    numbers.Add(num, 0);
                }
                numbers[num]++;
            }

            foreach (var number in numbers)
            {
                if (number.Value % 2 != 0)
                {
                    numbers.Remove(number.Key);
                }
            }

            foreach (var number in numbers)
            {
                Console.WriteLine(number.Key);
            }
        }
    }
}
