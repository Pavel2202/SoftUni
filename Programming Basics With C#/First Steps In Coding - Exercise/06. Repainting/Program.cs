namespace _06._Repainting
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double safetyNylonPrice = 1.50;
            double paintPrice = 14.50;
            double paintThinnerPrice = 5.00;

            int nylonNeeded = int.Parse(Console.ReadLine());
            int paintNeeded = int.Parse(Console.ReadLine());
            int paintThinnerNeeded = int.Parse(Console.ReadLine());
            int hours = int.Parse(Console.ReadLine());

            double nylonTotalPrice = safetyNylonPrice * (nylonNeeded + 2);
            double paintTotalPrice = (paintNeeded + paintNeeded * 0.10) * paintPrice;
            double paintThinnerTotalPrice = paintThinnerPrice * paintThinnerNeeded;

            double materialsSum = nylonTotalPrice + paintTotalPrice + paintThinnerTotalPrice + 0.40;

            double workersSum = (materialsSum * 0.30) * hours;

            double result = materialsSum + workersSum;

            Console.WriteLine(result);
        }
    }
}
