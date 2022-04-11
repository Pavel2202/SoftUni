namespace _4._Matching_Brackets
{
    using System;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            string solution = Console.ReadLine();

            Stack<int> indices = new Stack<int>();

            for (int i = 0; i < solution.Length; i++)
            {
                if (solution[i] == '(')
                {
                    indices.Push(i);
                }
                if (solution[i] == ')')
                {
                    int index = indices.Pop();
                    Console.WriteLine(solution.Substring(index, i - index + 1));
                }
            }
        }
    }
}
