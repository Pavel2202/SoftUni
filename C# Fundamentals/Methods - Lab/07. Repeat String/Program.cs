namespace _07._Repeat_String
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();
            int n = int.Parse(Console.ReadLine());
            string result = RepeatString(text, n);

            Console.WriteLine(result);
        }

        static string RepeatString(string text, int n)
        {
            string result = "";

            for (int i = 1; i <= n; i++)
            {
                result += text;
            }

            return result;
        }
    }
}
