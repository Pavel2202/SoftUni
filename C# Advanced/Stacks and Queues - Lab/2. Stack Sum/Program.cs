namespace _2._Stack_Sum
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Stack<int> numbers = new Stack<int>(input);

            while (true)
            {
                string[] command = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).ToArray();
                string type = command[0].ToLower();

                if (type == "end")
                {
                    break;
                }
                else if (type == "add")
                {
                    int first = int.Parse(command[1]);
                    int second = int.Parse(command[2]);
                    numbers.Push(first);
                    numbers.Push(second);
                }
                else if (type == "remove")
                {
                    int count = int.Parse(command[1]);
                    if (count <= numbers.Count)
                    {
                        for (int i = 0; i < count; i++)
                        {
                            numbers.Pop();
                        }
                    }
                }
            }

            int sum = 0;

            while (numbers.Count > 0)
            {
                int num = numbers.Pop();
                sum += num;
            }

            Console.WriteLine($"Sum: {sum}");
        }
    }
}
