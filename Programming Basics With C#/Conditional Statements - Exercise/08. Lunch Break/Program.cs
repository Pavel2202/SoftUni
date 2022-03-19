namespace _08._Lunch_Break
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string series = Console.ReadLine();
            int episodeTimespan = int.Parse(Console.ReadLine());
            int restTimespan = int.Parse(Console.ReadLine());

            double lunchTime = (double)restTimespan * 1 / 8;
            double relaxTime = (double)restTimespan * 1 / 4;

            double remainingTime = restTimespan - lunchTime - relaxTime;

            if (remainingTime >= episodeTimespan)
            {
                int timeLeft = (int)Math.Ceiling(remainingTime - episodeTimespan);
                Console.WriteLine($"You have enough time to watch {series} and left with {timeLeft} minutes free time.");
            }
            else
            {
                int timeNeeded = (int)Math.Ceiling(episodeTimespan - remainingTime);
                Console.WriteLine($"You don't have enough time to watch {series}, you need {timeNeeded} more minutes.");
            }
        }
    }
}
