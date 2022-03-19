namespace _05._Godzilla_vs._Kong
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            int supers = int.Parse(Console.ReadLine());
            double clothingPrice = double.Parse(Console.ReadLine());
            double decor = budget * 0.10;
            double clothingSum = clothingPrice * supers;
            if (supers > 150)
            {
                clothingSum = clothingSum - clothingSum * 0.10;
            }
            double sum = decor + clothingSum;
            double moneyLeft = budget - sum;
            double moneyNeeded = sum - budget;
            if (sum <= budget)
            {
                Console.WriteLine("Action!");
                Console.WriteLine($"Wingard starts filming with {moneyLeft:f2} leva left.");
            }
            else if (budget < sum)
            {
                Console.WriteLine("Not enough money!");
                Console.WriteLine($"Wingard needs {moneyNeeded:f2} leva more.");
            }
        }
    }
}
