namespace _01._Day_of_Week
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string[] days = new string[]
            {
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            };
            int n = int.Parse(Console.ReadLine());
            if (n > 0 && n <= days.Length)
                Console.WriteLine(days[n - 1]);
            else
                Console.WriteLine("Invalid day!");
        }
    }
}
