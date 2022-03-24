namespace _11._Math_operations
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int first = int.Parse(Console.ReadLine());
            string symbol = Console.ReadLine();
            int second = int.Parse(Console.ReadLine());
            double result = Calculate(first, symbol, second);

            Console.WriteLine(result);
        }

        static double Calculate(int first, string symbol, int second)
        {
            double result = 0;

            switch (symbol)
            {
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
                case "*":
                    result = first * second;
                    break;
                case "/":
                    result = first / second;
                    break;
            }

            return result;
        }
    }
}
