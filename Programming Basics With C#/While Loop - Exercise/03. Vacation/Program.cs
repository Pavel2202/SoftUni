namespace _03._Vacation
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double neededMoney = double.Parse(Console.ReadLine());
            double ownedMoney = double.Parse(Console.ReadLine());
            int daysCount = 0;
            int spendCount = 0;
            while (ownedMoney < neededMoney && spendCount < 5)
            {
                string command = Console.ReadLine();
                double money = double.Parse(Console.ReadLine());
                daysCount++;
                if (command == "spend")
                {
                    if (money >= ownedMoney)
                    {
                        ownedMoney = 0;
                    }
                    else
                    {
                        ownedMoney = ownedMoney - money;
                    }
                    spendCount++;
                }
                else if (command == "save")
                {
                    ownedMoney = ownedMoney + money;
                    spendCount = 0;
                }
            }
            if (spendCount == 5)
            {
                Console.WriteLine("You can't save the money.");
                Console.WriteLine(daysCount);
            }
            if (ownedMoney >= neededMoney)
            {
                Console.WriteLine($"You saved the money for {daysCount} days.");
            }
        }
    }
}
