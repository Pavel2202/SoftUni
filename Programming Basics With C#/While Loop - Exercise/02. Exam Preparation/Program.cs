namespace _02._Exam_Preparation
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int badGrades = int.Parse(Console.ReadLine());
            int tasksCount = 0;
            double average = 0;
            string lastTask = "";
            int badCount = 0;
            double sumGrades = 0;
            while (true)
            {
                string task = Console.ReadLine();
                if (task == "Enough")
                {
                    Console.WriteLine($"Average score: {average:f2}");
                    Console.WriteLine($"Number of problems: {tasksCount}");
                    Console.WriteLine($"Last problem: {lastTask}");
                    break;
                }

                lastTask = task;
                double ocenka = double.Parse(Console.ReadLine());
                tasksCount++;
                sumGrades = sumGrades + ocenka;
                average = sumGrades / tasksCount;

                if (ocenka <= 4)
                {
                    badCount++;
                }
                if (badCount >= badGrades)
                {
                    Console.WriteLine($"You need a break, {badCount} poor grades.");
                    break;
                }
            }
        }
    }
}
