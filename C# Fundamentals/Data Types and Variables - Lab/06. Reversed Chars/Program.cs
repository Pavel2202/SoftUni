namespace _06._Reversed_Chars
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            char first = Char.Parse(Console.ReadLine());
            char second = char.Parse(Console.ReadLine());
            char third = char.Parse(Console.ReadLine());

            Console.Write($"{third} {second} {first}");
        }
    }
}
