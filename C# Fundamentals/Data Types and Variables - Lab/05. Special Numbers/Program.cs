namespace _05._Special_Numbers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            bool isRight = false;

            for (int i = 1; i <= n; i++)
            {
                int sum = 0;
                int num = i;

                while (num > 0)
                {
                    sum += num % 10;
                    num = num / 10;
                }
                if (sum == 5 || sum == 7 || sum == 11)
                {
                    isRight = true;
                }

                Console.WriteLine($"{i} -> {isRight}");
                isRight = false;
            }
        }
    }
}
