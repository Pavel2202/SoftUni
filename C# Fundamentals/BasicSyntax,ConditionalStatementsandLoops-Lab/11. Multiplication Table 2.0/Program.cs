namespace _11._Multiplication_Table_2._0
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int x = int.Parse(Console.ReadLine());

            if (x > 10)
            {
                Console.WriteLine($"{n} X {x} = {n * x}");
            }
            else
            {
                for (int i = x; i <= 10; i++)
                {
                    Console.WriteLine($"{n} X {i} = {n * i}");
                }
            }
        }
    }
}
