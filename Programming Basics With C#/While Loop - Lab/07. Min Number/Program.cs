namespace _07._Min_Number
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            int min = int.MaxValue;
            while (true)
            {
                int num = int.Parse(input);
                if (num < min)
                {
                    min = num;
                }
                input = Console.ReadLine();
                if (input == "Stop")
                {
                    break;
                }
            }
            Console.WriteLine(min);
        }
    }
}
