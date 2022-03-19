namespace _03._Time___15_Minutes
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int min = int.Parse(Console.ReadLine());
            int sec = int.Parse(Console.ReadLine());
            int time = (min * 60) + sec;
            int newTime = time + 15;
            int minTwo = newTime / 60;
            int secTwo = newTime % 60;
            if (secTwo < 10)
            {
                {
                    if (minTwo == 24)
                    {
                        minTwo = 0;
                    }
                }
                Console.WriteLine($"{minTwo}:0{secTwo}");
            }
            else
            {
                if (minTwo == 24)
                {
                    minTwo = 0;
                }
                Console.WriteLine($"{minTwo}:{secTwo}");
            }
        }
    }
}
