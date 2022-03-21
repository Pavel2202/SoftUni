namespace _01._Convert_Meters_to_Kilometers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int metres = int.Parse(Console.ReadLine());
            decimal kilometres = metres / 1000m;
            Console.WriteLine($"{kilometres:f2}");
        }
    }
}
