namespace _03._Sum_Prime_Non_Prime
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string command = Console.ReadLine();
            int primeSum = 0;
            int nonPrimeSum = 0;

            while (command != "stop")
            {
                int num = int.Parse(command);

                if (num < 0)
                {
                    Console.WriteLine("Number is negative.");
                }
                else
                {
                    int count = 0;

                    for (int i = 1; i <= num; i++)
                    {
                        if (num % i == 0)
                        {
                            count++;
                        }
                    }

                    if (count == 2)
                    {
                        primeSum += num;
                    }
                    else
                    {
                        nonPrimeSum += num;
                    }
                }

                command = Console.ReadLine();
            }

            Console.WriteLine($"Sum of all prime numbers is: {primeSum}");
            Console.WriteLine($"Sum of all non prime numbers is: {nonPrimeSum}");
        }
    }
}
