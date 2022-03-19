namespace _04._Train_The_Trainers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int judges = int.Parse(Console.ReadLine());
            string name = Console.ReadLine();
            double sum = 0;
            double average = 0;
            double sumAverage = 0;
            double grade = 0;
            int gradesCount = 0;

            while (name != "Finish")
            {
                for (int i = 1; i <= judges; i++)
                {
                    grade = double.Parse(Console.ReadLine());
                    gradesCount++;
                    sum += grade;
                    sumAverage += grade;
                }

                average = sum / judges;
                sum = 0;
                Console.WriteLine($"{name} - {average:f2}.");
                name = Console.ReadLine();
            }

            double totalAverage = sumAverage / gradesCount;
            Console.WriteLine($"Student's final assessment is {totalAverage:f2}.");
        }
    }
}
