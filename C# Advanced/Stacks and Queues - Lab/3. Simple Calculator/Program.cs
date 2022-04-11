namespace _3._Simple_Calculator
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

            Stack<string> solution = new Stack<string>();

            for (int i = input.Length - 1; i >= 0; i--)
            {
                solution.Push(input[i]);
            }

            while (solution.Count > 1)
            {
                int firstNum = int.Parse(solution.Pop());
                string symbol = solution.Pop();
                int secondNum = int.Parse(solution.Pop());
                int sum = 0;
                if (symbol == "+")
                {
                    sum = firstNum + secondNum;
                }
                else if (symbol == "-")
                {
                    sum = firstNum - secondNum;
                }
                solution.Push(sum.ToString());
            }

            Console.WriteLine(solution.Pop());
        }
    }
}
