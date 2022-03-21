namespace _09._Chars_to_String
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            char first = Char.Parse(Console.ReadLine());
            char second = Char.Parse(Console.ReadLine());
            char third = Char.Parse(Console.ReadLine());

            Console.WriteLine($"{first}{second}{third}");
        }
    }
}
