namespace _07._Equal_Arrays
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] first = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int[] second = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int equalCount = 0;
            int sum = 0;
            int failIndex = 0;
            for (int i = 0; i < first.Length; i++)
            {
                if (first[i] == second[i])
                {
                    equalCount++;
                    sum = sum + first[i];
                }
                else
                {
                    failIndex = i;
                    Console.WriteLine($"Arrays are not identical. Found difference at {failIndex} index");
                    break;
                }
            }
            if (equalCount == first.Length)
            {
                Console.WriteLine($"Arrays are identical. Sum: {sum}");
            }
        }
    }
}
