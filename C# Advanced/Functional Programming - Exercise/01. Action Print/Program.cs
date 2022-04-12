namespace _01._Action_Print
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            Action<string> names = name => Console.WriteLine(name);

            Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToList()
                .ForEach(names);
        }
    }
}
