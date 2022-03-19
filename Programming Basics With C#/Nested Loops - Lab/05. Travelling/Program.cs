namespace _05._Travelling
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string country = Console.ReadLine();

                if (country == "End")
                {
                    break;
                }

                double moneyNeeded = double.Parse(Console.ReadLine());

                while (true)
                {
                    double moneySaved = double.Parse(Console.ReadLine());
                    moneyNeeded = moneyNeeded - moneySaved;

                    if (moneyNeeded <= 0)
                    {
                        Console.WriteLine($"Going to {country}!");
                        break;
                    }
                }
            }
        }
    }
}
