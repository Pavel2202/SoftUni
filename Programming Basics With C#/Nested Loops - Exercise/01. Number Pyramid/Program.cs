namespace _01._Number_Pyramid
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            bool isBigger = false;
            int current = 1;

            for (int i = 1; i <= n; i++)
            {
                for (int j = 1; j <= i; j++)
                {
                    if (current > n)
                    {
                        isBigger = true;
                        break;
                    }

                    Console.Write(current + " ");
                    current++;
                }

                if (isBigger)
                {
                    break;
                }

                Console.WriteLine();
            }
        }
    }
}
