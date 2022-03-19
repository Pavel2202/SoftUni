namespace _08._Basketball_Equipment
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double trainingPrice = double.Parse(Console.ReadLine());

            double shoes = trainingPrice - trainingPrice * 0.40;
            double outfit = shoes - shoes * 0.20;
            double ball = outfit * 0.25;
            double accessories = ball * 0.20;

            double result = trainingPrice + shoes + outfit + ball + accessories;

            Console.WriteLine(result);
        }
    }
}
