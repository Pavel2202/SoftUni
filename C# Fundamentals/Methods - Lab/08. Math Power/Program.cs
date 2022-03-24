namespace _08._Math_Power
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double number = double.Parse(Console.ReadLine());
            double powerNum = double.Parse(Console.ReadLine());
            double result = Power(number, powerNum);

            Console.WriteLine(result);
        }

        static double Power(double number, double powerNum)
        {
            double result = Math.Pow(number, powerNum);
            return result;
        }
    }
}
