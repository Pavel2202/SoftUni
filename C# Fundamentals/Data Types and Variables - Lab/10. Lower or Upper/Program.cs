namespace _10._Lower_or_Upper
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            char letter = Char.Parse(Console.ReadLine());
            int number = (int)letter;

            if (number >= 65 && number <= 90)
                Console.WriteLine("upper-case");
            if (number >= 97 && number <= 122)
                Console.WriteLine("lower-case");
        }
    }
}
