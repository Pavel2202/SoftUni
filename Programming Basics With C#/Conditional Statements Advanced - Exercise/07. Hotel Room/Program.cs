namespace _07._Hotel_Room
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string month = Console.ReadLine();
            int nights = int.Parse(Console.ReadLine());
            double priceApartment = 0;
            double priceStudio = 0;
            double sumStudio = 0;
            double sumApartment = 0;
            switch (month)
            {
                case "May":
                case "October":
                    priceStudio = 50;
                    priceApartment = 65;
                    sumApartment = priceApartment * nights;
                    sumStudio = priceStudio * nights;
                    if (nights > 7 && nights <= 14)
                    {
                        sumStudio = sumStudio - sumStudio * 0.05;
                    }
                    else if (nights > 14)
                    {
                        sumApartment = sumApartment - sumApartment * 0.10;
                        sumStudio = sumStudio - sumStudio * 0.30;
                    }
                    break;
                case "June":
                case "September":
                    priceStudio = 75.20;
                    priceApartment = 68.70;
                    sumStudio = priceStudio * nights;
                    sumApartment = priceApartment * nights;
                    if (nights > 14)
                    {
                        sumApartment = sumApartment - sumApartment * 0.10;
                        sumStudio = sumStudio - sumStudio * 0.20;
                    }
                    break;
                case "July":
                case "August":
                    priceApartment = 77;
                    priceStudio = 76;
                    sumStudio = priceStudio * nights;
                    sumApartment = priceApartment * nights;
                    if (nights > 14)
                    {
                        sumApartment = sumApartment - sumApartment * 0.10;
                    }
                    break;
            }
            Console.WriteLine($"Apartment: {sumApartment:f2} lv.");
            Console.WriteLine($"Studio: {sumStudio:f2} lv.");
        }
    }
}
