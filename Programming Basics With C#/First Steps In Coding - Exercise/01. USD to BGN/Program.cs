namespace _01._USD_to_BGN
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double usd = double.Parse(Console.ReadLine());

            double lev = usd * 1.79549;

            Console.WriteLine(lev);
        }
    }
}
