namespace _04._Back_In_30_Minutes
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int hours = int.Parse(Console.ReadLine());
            int minutes = int.Parse(Console.ReadLine());
            int minsAfter30 = minutes + 30;

            if (minsAfter30 > 59)
            {
                hours++;
                minsAfter30 -= 60;

                if (hours >= 24)
                {
                    hours = 0;
                }
            }

            if (minsAfter30 < 10)
            {
                Console.WriteLine($"{hours}:0{minsAfter30}");
            }
            else
            {
                Console.WriteLine($"{hours}:{minsAfter30}");
            }
        }
    }
}
