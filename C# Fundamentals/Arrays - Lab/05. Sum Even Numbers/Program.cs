namespace _05._Sum_Even_Numbers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] inputArray = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            int[] numbers = new int[inputArray.Length];
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = int.Parse(inputArray[i]);
                if (numbers[i] % 2 == 0)
                {
                    sum += numbers[i];
                }
            }
            Console.WriteLine($"{sum}");
        }
    }
}
