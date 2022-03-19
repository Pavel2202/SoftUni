namespace _06._World_Swimming_Record
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double record = double.Parse(Console.ReadLine());
            double distance = double.Parse(Console.ReadLine());
            double seconds = double.Parse(Console.ReadLine());
            double timeIvan = distance * seconds;
            double delay = Math.Floor((distance / 15)) * 12.5;
            double totalTime = timeIvan + delay;
            double timeNeeded = totalTime - record;
            if (totalTime < record)
            {
                Console.WriteLine($"Yes, he succeeded! The new world record is {totalTime:f2} seconds.");
            }
            else
            {
                Console.WriteLine($"No, he failed! He was {timeNeeded:f2} seconds slower.");
            }
        }
    }
}
