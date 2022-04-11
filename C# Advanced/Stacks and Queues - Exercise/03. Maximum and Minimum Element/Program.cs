namespace _03._Maximum_and_Minimum_Element
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Stack<int> numbers = new Stack<int>();

            for (int i = 0; i < n; i++)
            {
                int[] input = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();

                int type = input[0];

                if (type == 1)
                {
                    int num = input[1];
                    numbers = Add(numbers, num);
                }
                else if (type == 2)
                {
                    numbers = Remove(numbers);
                }
                else if (type == 3)
                {
                    PrintMax(numbers);
                }
                else if (type == 4)
                {
                    PrintMin(numbers);
                }
            }


            Console.WriteLine(string.Join(", ", numbers));

        }

        private static void PrintMin(Stack<int> numbers)
        {
            if (numbers.Count > 0)
            {
                int min = int.MaxValue;
                foreach (var item in numbers)
                {
                    if (item < min)
                    {
                        min = item;
                    }
                }
                Console.WriteLine(min);
            }
        }

        private static void PrintMax(Stack<int> numbers)
        {
            if (numbers.Count > 0)
            {
                int max = int.MinValue;
                foreach (var item in numbers)
                {
                    if (item > max)
                    {
                        max = item;
                    }
                }
                Console.WriteLine(max);
            }
        }

        private static Stack<int> Remove(Stack<int> numbers)
        {
            if (numbers.Count > 0)
            {
                numbers.Pop();
            }
            return numbers;
        }

        private static Stack<int> Add(Stack<int> numbers, int num)
        {
            numbers.Push(num);
            return numbers;
        }
    }
}
