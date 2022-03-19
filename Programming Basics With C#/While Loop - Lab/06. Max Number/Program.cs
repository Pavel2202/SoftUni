namespace _06._Max_Number
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            int max = int.MinValue;
            while (true)
            {
                int num = int.Parse(input);
                if (num > max)
                {
                    max = num;
                }
                input = Console.ReadLine();
                if (input == "Stop")
                {
                    break;
                }
            }
            Console.WriteLine(max);
        }
    }
}
