namespace _05._Supplies_for_School
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double pencilsPrice = 5.80;
            double markersPrice = 7.20;
            double bleachPricePerLiter = 1.20;

            int pencilsCount = int.Parse(Console.ReadLine());
            int markersCount = int.Parse(Console.ReadLine());
            int bleachLiters = int.Parse(Console.ReadLine());
            int discount = int.Parse(Console.ReadLine());

            double discountPercantage = (double)discount / 100;

            double sum = (pencilsCount * pencilsPrice) +
                (markersCount * markersPrice) +
                (bleachLiters * bleachPricePerLiter);

            double result = sum - (sum * discountPercantage);

            Console.WriteLine(result);
        }
    }
}
