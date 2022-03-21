namespace _06._Even_and_Odd_Subtraction
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int oddSum = 0;
            int evenSum = 0;
            int result = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 2 == 0)
                {
                    evenSum += numbers[i];
                }
                else if (numbers[i] % 2 != 0)
                {
                    oddSum += numbers[i];
                }
            }
            result = evenSum - oddSum;
            Console.WriteLine(result);
        }
    }
}
