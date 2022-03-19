namespace _03._Combinations
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 0;
            int count = 0;

            for (int first = 0; first <= n; first++)
            {
                for (int second = 0; second <= n; second++)
                {
                    for (int third = 0; third <= n; third++)
                    {
                        sum = first + second + third;

                        if (sum == n)
                        {
                            count++;
                        }
                    }
                }
            }

            Console.WriteLine(count);
        }
    }
}
