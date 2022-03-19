namespace _03._Histogram
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double n = double.Parse(Console.ReadLine());
            int numCount1 = 0;
            int numCount2 = 0;
            int numCount3 = 0;
            int numCount4 = 0;
            int numCount5 = 0;
            double p1 = 0;
            double p2 = 0;
            double p3 = 0;
            double p4 = 0;
            double p5 = 0;
            for (int i = 1; i <= n; i++)
            {
                int num = int.Parse(Console.ReadLine());
                if (num < 200)
                {

                    numCount1++;
                }
                else if (200 <= num && num <= 399)
                {

                    numCount2++;
                }
                else if (400 <= num && num <= 599)
                {

                    numCount3++;
                }
                else if (600 <= num && num <= 799)
                {

                    numCount4++;
                }
                else if (num >= 800)
                {

                    numCount5++;
                }

            }
            p1 += (numCount1 / n) * 100;
            p2 += (numCount2 / n) * 100;
            p3 += (numCount3 / n) * 100;
            p4 += (numCount4 / n) * 100;
            p5 += (numCount5 / n) * 100;
            Console.WriteLine($"{p1:f2}%");
            Console.WriteLine($"{p2:f2}%");
            Console.WriteLine($"{p3:f2}%");
            Console.WriteLine($"{p4:f2}%");
            Console.WriteLine($"{p5:f2}%");
        }
    }
}
