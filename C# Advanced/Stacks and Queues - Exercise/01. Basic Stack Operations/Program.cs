namespace _01._Basic_Stack_Operations
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

            int toPush = input[0];
            int toPop = input[1];
            int toFind = input[2];

            int[] numInput = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Stack<int> numbers = new Stack<int>();

            for (int i = 0; i < toPush; i++)
            {
                numbers.Push(numInput[i]);
            }

            for (int i = 0; i < toPop; i++)
            {
                numbers.Pop();
            }

            bool isFound = false;
            bool isCount = true;

            int smallest = int.MaxValue;
            if (numbers.Count == 0)
            {
                Console.WriteLine(0);
                isCount = false;
            }
            else
            {
                while (numbers.Count > 0)
                {
                    if (numbers.Peek() == toFind)
                    {
                        Console.WriteLine("true");
                        numbers.Pop();
                        isFound = true;
                        break;
                    }
                    else
                    {
                        int num = numbers.Pop();
                        if (num < smallest)
                        {
                            smallest = num;
                        }
                    }
                }
            }
            if (!isFound && isCount)
            {
                Console.WriteLine(smallest);
            }
        }
    }
}
