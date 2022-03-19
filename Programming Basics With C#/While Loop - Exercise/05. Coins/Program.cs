namespace _05._Coins
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double sum = double.Parse(Console.ReadLine());
            int coins = 0;

            while (sum > 0)
            {
                sum = Math.Round(sum, 2);
                if (sum >= 3)
                {
                    sum = sum - 2;
                    coins++;
                }
                else if (sum >= 2)
                {
                    sum = sum - 2;
                    coins++;
                }
                else if (sum >= 1)
                {
                    sum = sum - 1;
                    coins++;
                }
                else if (sum >= 0.50)
                {
                    sum = sum - 0.50;
                    coins++;
                }
                else if (sum >= 0.20)
                {
                    sum = sum - 0.20;
                    coins++;
                }
                else if (sum >= 0.10)
                {
                    sum = sum - 0.10;
                    coins++;
                }
                else if (sum >= 0.05)
                {
                    sum = sum - 0.05;
                    coins++;
                }
                else if (sum >= 0.02)
                {
                    sum = sum - 0.02;
                    coins++;
                }
                else if (sum >= 0.01)
                {
                    sum = sum - 0.01;
                    coins++;
                }
            }

            Console.WriteLine(coins);
        }
    }
}
