namespace _06._Oscars
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            double academyPoints = double.Parse(Console.ReadLine());
            int judgesCount = int.Parse(Console.ReadLine());

            double sumPoints = academyPoints;
            bool flag = false;

            for (int i = 0; i < judgesCount; i++)
            {
                string nameJury = Console.ReadLine();
                double pointsJury = double.Parse(Console.ReadLine());
                double momentPoints = (nameJury.Length * pointsJury) / 2;
                sumPoints = sumPoints + momentPoints;
                if (sumPoints >= 1250.5)
                {
                    flag = true;
                    break;
                }



            }
            if (flag)
            {
                Console.WriteLine($"Congratulations, {name} got a nominee for leading role with {sumPoints:F1}!");
            }
            else
            {
                Console.WriteLine($"Sorry, {name} you need {1250.5 - sumPoints:F1} more!");
            }
        }
    }
}
