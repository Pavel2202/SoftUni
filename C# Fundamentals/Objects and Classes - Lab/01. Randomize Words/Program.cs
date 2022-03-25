namespace _01._Randomize_Words
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

            Random rnd = new Random();

            for (int i = 0; i < input.Length; i++)
            {
                int random = rnd.Next(0, input.Length);
                string word = input[random];
                input[random] = input[i];
                input[i] = word;
            }

            Console.WriteLine(string.Join(Environment.NewLine, input));
        }
    }
}
