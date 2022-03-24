namespace _02._Grades
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double grade = double.Parse(Console.ReadLine());
            PrintGrade(grade);
        }

        static void PrintGrade(double grade)
        {
            if (2.00 <= grade && grade <= 2.99)
            {
                Console.WriteLine("Fail");
            }
            else if (3 <= grade && grade <= 3.49)
            {
                Console.WriteLine("Poor");
            }
            else if (3.50 <= grade && grade <= 4.49)
            {
                Console.WriteLine("Good");
            }
            else if (4.50 <= grade && grade <= 5.49)
            {
                Console.WriteLine("Very good");
            }
            else if (5.50 <= grade && grade <= 6.00)
            {
                Console.WriteLine("Excellent");
            }
        }
    }
}
