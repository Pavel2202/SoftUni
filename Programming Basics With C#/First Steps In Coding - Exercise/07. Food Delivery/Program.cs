namespace _07._Food_Delivery
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double chickenMenuPrice = 10.35;
            double fishMenuPrice = 12.40;
            double vegetarianMenuPrice = 8.15;

            int chickenMenusCount = int.Parse(Console.ReadLine());
            int fishMenusCount = int.Parse(Console.ReadLine());
            int vegetarianMenusCount = int.Parse(Console.ReadLine());

            double chickenMenuSum = chickenMenusCount * chickenMenuPrice;
            double fishMenuSum = fishMenusCount * fishMenuPrice;
            double vegetarianMenuSum = vegetarianMenusCount * vegetarianMenuPrice;

            double totalSum = chickenMenuSum + fishMenuSum + vegetarianMenuSum;

            double dessertPrice = totalSum * 0.20;

            double result = totalSum + dessertPrice + 2.50;

            Console.WriteLine(result);
        }
    }
}
