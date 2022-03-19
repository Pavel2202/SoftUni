namespace _12._Trade_Commissions
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string town = Console.ReadLine();
            double sales = double.Parse(Console.ReadLine());
            double comission = 0;
            switch (town)
            {
                case "Sofia":
                    if (0 <= sales && sales <= 500)
                    {
                        comission = sales * 0.05;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (500 < sales && sales <= 1000)
                    {
                        comission = sales * 0.07;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (1000 < sales && sales <= 10000)
                    {
                        comission = sales * 0.08;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (sales > 10000)
                    {
                        comission = sales * 0.12;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else
                    {
                        Console.WriteLine("error");
                    }
                    break;
                case "Varna":
                    if (0 <= sales && sales <= 500)
                    {
                        comission = sales * 0.045;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (500 < sales && sales <= 1000)
                    {
                        comission = sales * 0.075;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (1000 < sales && sales <= 10000)
                    {
                        comission = sales * 0.1;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (sales > 10000)
                    {
                        comission = sales * 0.13;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else
                    {
                        Console.WriteLine("error");
                    }
                    break;
                case "Plovdiv":
                    if (0 <= sales && sales <= 500)
                    {
                        comission = sales * 0.055;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (500 < sales && sales <= 1000)
                    {
                        comission = sales * 0.08;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (1000 < sales && sales <= 10000)
                    {
                        comission = sales * 0.12;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else if (sales > 10000)
                    {
                        comission = sales * 0.145;
                        Console.WriteLine($"{comission:f2}");
                    }
                    else
                    {
                        Console.WriteLine("error");
                    }
                    break;
                default:
                    Console.WriteLine("error");
                    break;
            }
        }
    }
}
