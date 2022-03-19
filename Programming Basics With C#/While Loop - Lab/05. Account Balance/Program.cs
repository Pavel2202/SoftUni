namespace _05._Account_Balance
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            double sum = 0;
            while (true)
            {
                double money = double.Parse(input);
                if (money < 0)
                {
                    Console.WriteLine("Invalid operation!");
                    break;
                }
                sum = sum + money;
                Console.WriteLine($"Increase: {money:f2}");
                input = Console.ReadLine();
                if (input == "NoMoreMoney")
                {
                    break;
                }
            }
            Console.WriteLine($"Total: {sum:f2}");
        }
    }
}
