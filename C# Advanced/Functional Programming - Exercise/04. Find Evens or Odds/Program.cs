namespace _04._Find_Evens_or_Odds
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            int start = input[0];
            int end = input[1];
            string type = Console.ReadLine();
            int[] numbers = new int[end - start + 1];
            int index = 0;

            for (int i = start; i <= end; i++)
            {
                numbers[index] = i;
                index++;
            }
            if (type == "odd")
            {
                numbers = numbers.Where(n => n % 2 != 0).ToArray();
            }
            else
            {
                numbers = numbers.Where(n => n % 2 == 0).ToArray();
            }

            Console.WriteLine(string.Join(" ", numbers));
        }
    }
}
