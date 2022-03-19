namespace _04._Sequence_2k_1
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 1;
            while (sum <= n)
            {
                Console.WriteLine(sum);

                sum = 2 * sum + 1;
            }
        }
    }
}
