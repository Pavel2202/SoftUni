namespace _03._Sum_Numbers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int firstNum = int.Parse(Console.ReadLine());
            int sum = 0;
            while (true)
            {
                int secondNum = int.Parse(Console.ReadLine());
                sum = sum + secondNum;
                if (sum >= firstNum)
                {
                    Console.WriteLine(sum);
                    break;
                }
            }
        }
    }
}
