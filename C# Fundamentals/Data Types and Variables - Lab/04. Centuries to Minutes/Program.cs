namespace _04._Centuries_to_Minutes
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int input = int.Parse(Console.ReadLine());
            int centuries = input;
            int years = centuries * 100;
            int days = (int)(years * 365.2422);
            int hours = days * 24;
            int minutes = hours * 60;

            Console.WriteLine($"{centuries} centuries = {years} years = {days:f0} days = {hours:f0} hours = {minutes:f0} minutes");
        }
    }
}
