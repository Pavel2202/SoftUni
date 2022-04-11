namespace _05._Fashion_Boutique
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();
            Stack<int> clothes = new Stack<int>(input);

            int capacity = int.Parse(Console.ReadLine());

            int rackCount = 0;
            int sum = 0;

            while (clothes.Count > 0)
            {
                int cloth = clothes.Peek();
                if (sum + cloth == capacity)
                {
                    rackCount++;
                    clothes.Pop();
                    sum = 0;
                }
                else if (sum + cloth > capacity)
                {
                    rackCount++;
                    sum = clothes.Pop();
                }
                else
                {
                    sum += cloth;
                    clothes.Pop();
                }
            }
            if (sum > 0)
            {
                rackCount++;
            }
            Console.WriteLine(rackCount);
        }
    }
}
