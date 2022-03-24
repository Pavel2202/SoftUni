namespace _06._Calculate_Rectangle_Area
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double height = double.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());
            double area = GetArea(height, width);

            Console.WriteLine(area);
        }

        static double GetArea(double height, double width)
        {
            double sum = height * width;
            return sum;
        }
    }
}
