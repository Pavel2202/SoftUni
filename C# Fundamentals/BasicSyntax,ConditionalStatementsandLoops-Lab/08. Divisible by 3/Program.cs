﻿namespace _08._Divisible_by_3
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i <= 100; i++)
            {
                if (i % 3 == 0)
                    Console.WriteLine(i);
            }
        }
    }
}
