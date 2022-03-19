namespace _05._Journey
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            string season = Console.ReadLine();
            double moneySpend = 0;
            string destination = "";
            string typeOfHoliday = "";
            switch (season)
            {
                case "summer":
                    if (budget <= 100)
                    {
                        destination = "Bulgaria";
                        typeOfHoliday = "Camp";
                        moneySpend = budget * 0.30;
                    }
                    else if (budget <= 1000)
                    {
                        destination = "Balkans";
                        typeOfHoliday = "Camp";
                        moneySpend = budget * 0.40;
                    }
                    else if (budget > 1000)
                    {
                        destination = "Europe";
                        typeOfHoliday = "Hotel";
                        moneySpend = budget * 0.90;
                    }
                    break;
                case "winter":
                    if (budget <= 100)
                    {
                        destination = "Bulgaria";
                        typeOfHoliday = "Hotel";
                        moneySpend = budget * 0.70;
                    }
                    else if (budget <= 1000)
                    {
                        destination = "Balkans";
                        typeOfHoliday = "Hotel";
                        moneySpend = budget * 0.80;
                    }
                    else if (budget > 1000)
                    {
                        destination = "Europe";
                        typeOfHoliday = "Hotel";
                        moneySpend = budget * 0.90;
                    }
                    break;
            }
            Console.WriteLine($"Somewhere in {destination}");
            Console.WriteLine($"{typeOfHoliday} - {moneySpend:f2}");
        }
    }
}
