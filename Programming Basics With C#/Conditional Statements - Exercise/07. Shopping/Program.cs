namespace _07._Shopping
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());

            double graphicsCardPrice = 250;
            int graphicsCardCount = int.Parse(Console.ReadLine());

            double graphicsCardSum = graphicsCardPrice * graphicsCardCount;

            double cpuPrice = graphicsCardSum * 0.35;
            int cpuCount = int.Parse(Console.ReadLine());

            double cpuSum = cpuPrice * cpuCount;

            double ramPrice = graphicsCardSum * 0.10;
            int ramCount = int.Parse(Console.ReadLine());

            double ramSum = ramPrice * ramCount;

            double totalSum = graphicsCardSum + cpuSum + ramSum;

            if (graphicsCardCount > cpuCount)
            {
                totalSum = totalSum - totalSum * 0.15;
            }

            if (totalSum <= budget)
            {
                double moneyLeft = budget - totalSum;
                Console.WriteLine($"You have {moneyLeft:f2} leva left!");
            }
            else
            {
                double moneyNeeded = totalSum - budget;
                Console.WriteLine($"Not enough money! You need {moneyNeeded:f2} leva more!");
            }
        }
    }
}
