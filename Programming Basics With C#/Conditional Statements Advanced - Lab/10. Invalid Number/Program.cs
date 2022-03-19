namespace _10._Invalid_Number
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            if (100 <= num && num <= 200)
            {
                Console.WriteLine();
            }
            else if (num == 0)
            {
                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("invalid");
            }
        }
    }
}
