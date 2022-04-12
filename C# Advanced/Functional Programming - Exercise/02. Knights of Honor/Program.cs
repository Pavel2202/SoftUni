namespace _02._Knights_of_Honor
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            Action<string> names = name => Console.WriteLine($"Sir {name}");

            Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToList()
                .ForEach(names);
        }
    }
}
