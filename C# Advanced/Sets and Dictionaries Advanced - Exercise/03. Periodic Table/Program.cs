namespace _03._Periodic_Table
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            SortedSet<string> chemicals = new SortedSet<string>();

            for (int i = 0; i < n; i++)
            {
                string[] line = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();

                for (int j = 0; j < line.Length; j++)
                {
                    chemicals.Add(line[j]);
                }
            }

            foreach (var chemical in chemicals)
            {
                Console.Write($"{chemical} ");
            }
        }
    }
}
