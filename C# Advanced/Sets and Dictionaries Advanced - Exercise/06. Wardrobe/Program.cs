namespace _06._Wardrobe
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Dictionary<string, Dictionary<string, int>> clothes = new Dictionary<string, Dictionary<string, int>>();

            for (int i = 0; i < n; i++)
            {
                string[] input = Console.ReadLine()
                    .Split(" -> ", StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();

                string color = input[0];
                string splitted = input[1];
                string[] dresses = splitted.Split(',', StringSplitOptions.RemoveEmptyEntries).ToArray();

                if (!clothes.ContainsKey(color))
                {
                    clothes.Add(color, new Dictionary<string, int>());
                }

                for (int j = 0; j < dresses.Length; j++)
                {
                    if (!clothes[color].ContainsKey(dresses[j]))
                    {
                        clothes[color].Add(dresses[j], 0);
                    }
                    clothes[color][dresses[j]]++;
                }
            }

            string[] toFind = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).ToArray();
            string findColor = toFind[0];
            string findDress = toFind[1];

            foreach (var color in clothes)
            {
                Console.WriteLine($"{color.Key} clothes:");
                foreach (var cloth in color.Value)
                {
                    Console.Write($"* {cloth.Key} - {cloth.Value} ");
                    if (color.Key == findColor && cloth.Key == findDress)
                    {
                        Console.WriteLine($"(found!)");
                    }
                    else
                    {
                        Console.WriteLine();
                    }
                }
            }
        }
    }
}
