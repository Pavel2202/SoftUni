namespace _06._Vowels_Sum
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();
            int sum = 0;
            for (int i = 0; i < text.Length; i++)
            {
                switch (text[i])
                {
                    case 'a':
                        sum = sum + 1;
                        break;
                    case 'e':
                        sum = sum + 2;
                        break;
                    case 'i':
                        sum = sum + 3;
                        break;
                    case 'o':
                        sum = sum + 4;
                        break;
                    case 'u':
                        sum = sum + 5;
                        break;
                }
            }
            Console.WriteLine(sum);
        }
    }
}
