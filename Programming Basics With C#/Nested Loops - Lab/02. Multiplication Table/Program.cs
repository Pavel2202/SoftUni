namespace _02._Multiplication_Table
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int result = 0;

            for (int first = 1; first <= 10; first++)
            {
                for (int second = 1; second <= 10; second++)
                {
                    result = first * second;
                    Console.WriteLine($"{first} * {second} = {result}");
                }
            }
        }
    }
}
