namespace _03._Word_Synonyms
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            Dictionary<string, List<string>> output = new Dictionary<string, List<string>>();

            for (int i = 1; i <= n; i++)
            {
                string word = Console.ReadLine();
                string synonym = Console.ReadLine();

                if (output.ContainsKey(word) == false)
                {
                    output.Add(word, new List<string>());
                    output[word].Add(synonym);
                }
                else
                {
                    output[word].Add(synonym);
                }
            }

            foreach (var item in output)
            {
                Console.WriteLine($"{item.Key} - {string.Join(", ", item.Value)}");
            }
        }
    }
}
