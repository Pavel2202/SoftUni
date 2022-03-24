namespace _10._Multiply_Evens_by_Odds
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int number = Math.Abs(int.Parse(Console.ReadLine()));

            int evenSum = 0;
            int oddSum = 0;
            int result = 0;

            while (number > 0)
            {
                int digit = number % 10;
                number = number / 10;

                if (digit % 2 == 0)
                {
                    evenSum += digit;
                }
                else
                {
                    oddSum += digit;
                }
            }

            result = evenSum * oddSum;
            Console.WriteLine(result);
        }
    }
}
