namespace _07._Sum_Numbers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double num = 0;
            double sum = 0;
            for (int i = 1; i <= n; i++)
            {
                num = double.Parse(Console.ReadLine());
                sum = sum + num;
            }

            Console.WriteLine(sum);
        }
    }
}
