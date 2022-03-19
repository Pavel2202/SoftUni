namespace _07._Area_of_Figures
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string figure = Console.ReadLine();
            if (figure == "square")
            {
                double side = double.Parse(Console.ReadLine());
                double area = side * side;
                Console.WriteLine($"{area:f3}");
            }
            else if (figure == "rectangle")
            {
                double side1 = double.Parse(Console.ReadLine());
                double side2 = double.Parse(Console.ReadLine());
                double area = side1 * side2;
                Console.WriteLine($"{area:f3}");
            }
            else if (figure == "circle")
            {
                double side = double.Parse(Console.ReadLine());
                double area = Math.PI * side * side;
                Console.WriteLine($"{area:f3}");
            }
            else if (figure == "triangle")
            {
                double side1 = double.Parse(Console.ReadLine());
                double side2 = double.Parse(Console.ReadLine());
                double area = side1 * side2 / 2;
                Console.WriteLine($"{area:f3}");
            }
        }
    }
}
