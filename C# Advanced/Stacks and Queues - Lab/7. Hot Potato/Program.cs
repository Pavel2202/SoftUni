namespace _7._Hot_Potato
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            int n = int.Parse(Console.ReadLine());
            Queue<string> names = new Queue<string>(input);

            while (names.Count > 1)
            {
                for (int i = 0; i < n - 1; i++)
                {
                    string name = names.Dequeue();
                    names.Enqueue(name);
                }
                Console.WriteLine($"Removed {names.Dequeue()}");
            }
            Console.WriteLine($"Last is {names.Dequeue()}");
        }
    }
}
