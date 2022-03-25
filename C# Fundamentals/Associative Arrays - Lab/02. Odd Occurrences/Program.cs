namespace _02._Odd_Occurrences
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            Dictionary<string, int> result = new Dictionary<string, int>();

            for (int i = 0; i < words.Length; i++)
            {
                string LowerCaseWord = words[i].ToLower();

                if (result.ContainsKey(LowerCaseWord))
                {
                    result[LowerCaseWord]++;
                }
                else
                {
                    result[LowerCaseWord] = 1;
                }
            }

            foreach (var item in result)
            {
                if (item.Value % 2 != 0)
                {
                    Console.Write($"{item.Key} ");
                }
            }
        }
    }
}
