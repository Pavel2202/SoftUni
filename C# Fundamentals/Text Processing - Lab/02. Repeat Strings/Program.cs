namespace _02._Repeat_Strings
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            string result = string.Empty;

            for (int i = 0; i < input.Length; i++)
            {
                int n = input[i].Length;
                string word = input[i];

                for (int j = 0; j < n; j++)
                {
                    result += word;
                }
            }

            Console.WriteLine(result);
        }
    }
}
