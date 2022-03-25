namespace _05._Digits__Letters_and_Other
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();

            string digits = string.Empty;
            string strings = string.Empty;
            string chars = string.Empty;

            for (int i = 0; i < text.Length; i++)
            {
                if ((char)(text[i]) >= 48 && (char)(text[i]) <= 58)
                {
                    digits += text[i];
                }
                else if (((char)(text[i]) >= 65 && (char)(text[i]) <= 90) || ((char)(text[i]) >= 97 && (char)(text[i]) <= 122))
                {
                    strings += text[i];
                }
                else
                {
                    chars += text[i];
                }
            }

            Console.WriteLine(digits);
            Console.WriteLine(strings);
            Console.WriteLine(chars);
        }
    }
}
