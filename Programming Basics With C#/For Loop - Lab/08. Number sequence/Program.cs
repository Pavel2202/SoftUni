namespace _08._Number_sequence
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int smallest = int.MaxValue;
            int biggest = int.MinValue;
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                int num = int.Parse(Console.ReadLine());
                if (num > biggest)
                {
                    biggest = num;
                }
                if (num < smallest)
                {
                    smallest = num;
                }
            }
            Console.WriteLine($"Max number: {biggest}");
            Console.WriteLine($"Min number: {smallest}");
        }
    }
}
