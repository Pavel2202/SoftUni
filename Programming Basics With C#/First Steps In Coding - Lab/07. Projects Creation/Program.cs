namespace _07._Projects_Creation
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string nameOfTheArchitect = Console.ReadLine();
            int countOfProjects = int.Parse(Console.ReadLine());
            int timeNeededForProjects = countOfProjects * 3;
            Console.WriteLine("The architect " + nameOfTheArchitect + 
                " will need " + timeNeededForProjects + 
                " hours to complete " + countOfProjects + " project/s.");
            Console.ReadLine();
        }
    }
}
