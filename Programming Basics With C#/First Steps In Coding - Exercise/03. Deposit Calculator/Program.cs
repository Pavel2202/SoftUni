namespace _03._Deposit_Calculator
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double depositedSum = double.Parse(Console.ReadLine());
            int dueInMonths = int.Parse(Console.ReadLine());
            double annualYield = double.Parse(Console.ReadLine());

            double annualYieldPercentage = annualYield / 100;

            double sum = depositedSum + dueInMonths * ((depositedSum * annualYieldPercentage) / 12);

            Console.WriteLine(sum);
        }
    }
}
