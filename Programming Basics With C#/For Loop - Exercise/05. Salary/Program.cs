namespace _05._Salary
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double n = double.Parse(Console.ReadLine());
            double salary = double.Parse(Console.ReadLine());
            int facebookTabs = 0;
            int instagramTabs = 0;
            int redditTabs = 0;
            for (int i = 0; i <= n; i++)
            {
                string site = Console.ReadLine();
                if (site == "Facebook")
                {
                    facebookTabs++;
                }
                else if (site == "Instagram")
                {
                    instagramTabs++;
                }
                else if (site == "Reddit")
                {
                    redditTabs++;
                }
            }
            double moneyLost = (facebookTabs * 150) + (instagramTabs * 100) + (redditTabs * 50);
            if (salary <= moneyLost)
            {
                Console.WriteLine("You have lost your salary.");
            }
            else
            {
                double moneyLeft = salary - moneyLost;
                Console.WriteLine($"{moneyLeft:f0}");
            }
        }
    }
}
