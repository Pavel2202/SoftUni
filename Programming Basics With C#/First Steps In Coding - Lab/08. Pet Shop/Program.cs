namespace _08._Pet_Shop
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int countDogs = int.Parse(Console.ReadLine());
            int otherAnimals = int.Parse(Console.ReadLine());
            double dogFood = countDogs * 2.50;
            int otherFood = otherAnimals * 4;
            double allFood = dogFood + otherFood;
            Console.WriteLine(allFood + " lv.");
            Console.ReadLine();
        }
    }
}
