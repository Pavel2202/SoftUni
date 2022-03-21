namespace _07._Concat_Names
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            string surname = Console.ReadLine();
            string sign = Console.ReadLine();

            Console.WriteLine($"{name}{sign}{surname}");
        }
    }
}
