namespace _01._Sum_Seconds
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int firstTime = int.Parse(Console.ReadLine());
            int secondTime = int.Parse(Console.ReadLine());
            int thirdTime = int.Parse(Console.ReadLine());
            int sum = firstTime + secondTime + thirdTime;
            int min = sum / 60;
            int sec = sum % 60;
            if (sec < 10)
            {
                Console.WriteLine($"{min}:0{sec}");
            }
            else
            {
                Console.WriteLine($"{min}:{sec}");
            }
        }
    }
}
