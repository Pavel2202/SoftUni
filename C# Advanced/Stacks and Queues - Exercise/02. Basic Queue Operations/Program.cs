namespace _02._Basic_Queue_Operations
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

            int toAdd = input[0];
            int toRemove = input[1];
            int toFind = input[2];

            int[] numInput = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Queue<int> numbers = new Queue<int>();

            numbers = Add(numbers, toAdd, numInput);

            numbers = Remove(numbers, toRemove);

            bool isFound = false;
            bool hasCount = true;
            int smallest = int.MaxValue;

            if (numbers.Count == 0)
            {
                Console.WriteLine(0);
                hasCount = false;
            }
            else
            {
                while (numbers.Count > 0)
                {
                    if (numbers.Peek() == toFind)
                    {
                        Console.WriteLine("true");
                        numbers.Dequeue();
                        isFound = true;
                        break;
                    }
                    else
                    {
                        int num = numbers.Dequeue();
                        if (num < smallest)
                        {
                            smallest = num;
                        }
                    }
                }
            }

            if (!isFound && hasCount)
            {
                Console.WriteLine(smallest);
            }
        }

        private static Queue<int> Remove(Queue<int> numbers, int toRemove)
        {
            for (int i = 0; i < toRemove; i++)
            {
                numbers.Dequeue();
            }

            return numbers;
        }

        private static Queue<int> Add(Queue<int> numbers, int toAdd, int[] numInput)
        {
            for (int i = 0; i < toAdd; i++)
            {
                numbers.Enqueue(numInput[i]);
            }

            return numbers;
        }
    }
}
