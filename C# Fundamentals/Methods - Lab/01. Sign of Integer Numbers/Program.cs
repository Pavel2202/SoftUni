namespace _01._Sign_of_Integer_Numbers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            SignPrint(n);
        }
        static void SignPrint(int n)
        {
            if (n > 0)
            {
                Console.WriteLine($"The number {n} is positive.");
            }
            else if (n == 0)
            {
                Console.WriteLine($"The number {n} is zero.");
            }
            else
            {
                Console.WriteLine($"The number {n} is negative.");
            }
        }
    }
}
