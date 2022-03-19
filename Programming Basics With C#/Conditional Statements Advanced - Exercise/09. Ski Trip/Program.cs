namespace _09._Ski_Trip
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double days = double.Parse(Console.ReadLine());
            string room = Console.ReadLine();
            string grade = Console.ReadLine();
            double stay = 0;
            double discount = 0;
            days = days - 1;
            if (room == "room for one person")
            {
                discount = days * 18.00;
            }
            else if (room == "apartment")
            {
                stay = days * 25.00;

                if (days > 0 && days <= 10)
                {
                    discount = stay - (stay * 0.30);
                }
                else if (days > 10 && days <= 15)
                {
                    discount = stay - (stay * 0.35);
                }
                else if (days > 15)
                {
                    discount = stay - (stay * 0.50);
                }
            }
            else if (room == "president apartment")
            {
                stay = days * 35.00;

                if (days > 0 && days <= 10)
                {
                    discount = stay - (stay * 0.10);
                }
                else if (days > 10 && days <= 15)
                {
                    discount = stay - (stay * 0.15);
                }
                else if (days > 15)
                {
                    discount = stay - (stay * 0.20);
                }

            }

            double tip = 0;

            if (grade == "positive")
            {
                tip = discount + (discount * 0.25);
                Console.WriteLine($"{tip:F2}");
            }
            else if (grade == "negative")
            {
                tip = discount - (discount * 0.10);
                Console.WriteLine($"{tip:F2}");
            }
        }
    }
}
