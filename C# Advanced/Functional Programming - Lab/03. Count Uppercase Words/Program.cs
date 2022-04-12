namespace _03._Count_Uppercase_Words
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            Func<string, bool> func = n => n[0] == n.ToUpper()[0];

            string[] text = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Where(func)
                .ToArray();

            Console.WriteLine(string.Join(Environment.NewLine, text));
        }
    }
}
