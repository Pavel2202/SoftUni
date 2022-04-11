namespace _8._Traffic_Jam
{
    using System;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int passedCount = 0;

            Queue<string> cars = new Queue<string>();

            while (true)
            {
                string car = Console.ReadLine();
                if (car == "end")
                {
                    break;
                }

                if (car == "green")
                {
                    for (int i = 0; i < n; i++)
                    {
                        if (cars.Count > 0)
                        {
                            Console.WriteLine($"{cars.Dequeue()} passed!");
                            passedCount++;
                        }
                    }
                }
                else
                {
                    cars.Enqueue(car);
                }
            }

            Console.WriteLine($"{passedCount} cars passed the crossroads.");
        }
    }
}
