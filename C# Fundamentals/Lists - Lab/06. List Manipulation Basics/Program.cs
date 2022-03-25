namespace _06._List_Manipulation_Basics
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();

            while (true)
            {
                string[] command = Console.ReadLine().Split().ToArray();
                string type = command[0];

                if (type == "end")
                {
                    Console.WriteLine($"{string.Join(" ", numbers)}");
                    break;
                }

                int index = int.Parse(command[1]);

                switch (type)
                {
                    case "Add":
                        numbers.Add(index);
                        break;
                    case "Remove":
                        numbers.Remove(index);
                        break;
                    case "RemoveAt":
                        numbers.RemoveAt(index);
                        break;
                    case "Insert":
                        int number = int.Parse(command[2]);
                        numbers.Insert(number, index);
                        break;
                }
            }
        }
    }
}
