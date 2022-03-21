namespace _06._Foreign_Languages
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string coutry = Console.ReadLine();

            switch (coutry)
            {
                case "England":
                case "USA":
                    Console.WriteLine("English");
                    break;
                case "Spain":
                case "Argentina":
                case "Mexico":
                    Console.WriteLine("Spanish");
                    break;
                default:
                    Console.WriteLine("unknown");
                    break;
            }
        }
    }
}
