namespace _05._Applied_Arithmetics
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            string command = Console.ReadLine();

            while (command != "end")
            {
                if (command == "add")
                {
                    numbers = numbers.Select(n => n += 1).ToArray();
                }
                else if (command == "multiply")
                {
                    numbers = numbers.Select(n => n *= 2).ToArray();
                }
                else if (command == "subtract")
                {
                    numbers = numbers.Select(n => n -= 1).ToArray();
                }
                else if (command == "print")
                {
                    Console.WriteLine(string.Join(" ", numbers));
                }
                command = Console.ReadLine();
            }
        }
    }
}
