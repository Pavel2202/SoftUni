namespace _04._Fast_Food
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int foodQuantity = int.Parse(Console.ReadLine());
            int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Queue<int> orders = new Queue<int>(input);

            PrintBiggest(orders);

            while (orders.Count > 0)
            {
                int currentOrder = orders.Peek();
                if (currentOrder <= foodQuantity)
                {
                    foodQuantity -= currentOrder;
                    orders.Dequeue();
                }
                else
                {
                    break;
                }
            }

            if (orders.Count == 0)
            {
                Console.WriteLine($"Orders complete");
            }
            else
            {
                Console.WriteLine($"Orders left: {string.Join(' ', orders)}");
            }

        }

        private static void PrintBiggest(Queue<int> orders)
        {
            int biggest = int.MinValue;
            foreach (var item in orders)
            {
                if (item > biggest)
                {
                    biggest = item;
                }
            }

            Console.WriteLine(biggest);
        }
    }
}
