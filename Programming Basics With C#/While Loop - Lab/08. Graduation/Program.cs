namespace _08._Graduation
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int grades = 1;
            double sum = 0;
            int excluded = 0;
            while (grades <= 12)
            {
                double grade = double.Parse(Console.ReadLine());
                if (grade < 4.00)
                {
                    excluded++;
                    if (excluded > 1)
                    {
                        break;
                    }
                    continue;
                }
                sum = sum + grade;
                grades++;
            }
            double average = sum / 12;
            if (grades >= 12)
            {
                Console.WriteLine($"{name} graduated. Average grade: {average:f2}");
            }
            else
            {
                Console.WriteLine($"{name} has been excluded at {grades} grade");
            }
        }
    }
}
