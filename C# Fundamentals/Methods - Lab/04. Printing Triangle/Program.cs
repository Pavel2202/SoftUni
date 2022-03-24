namespace _04._Printing_Triangle
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 1; i <= n; i++)
            {
                PrintTop(i);
            }

            for (int j = n - 1; j >= 1; j--)
            {
                PrintTop(j);
            }
        }

        static void PrintTop(int n)
        {
            for (int i = 1; i <= n; i++)
            {
                Console.Write(i + " ");
            }

            Console.WriteLine();
        }
    }
}
