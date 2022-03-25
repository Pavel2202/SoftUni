namespace _01._Match_Full_Name
{
    using System;
    using System.Text.RegularExpressions;

    internal class Program
    {
        static void Main(string[] args)
        {
            string names = Console.ReadLine();

            string pattern = @"\b[A-Z][a-z]+ [A-Z][a-z]+";
            Regex regex = new Regex(pattern);
            MatchCollection matches = regex.Matches(names);

            foreach (var item in matches)
            {
                Console.Write($"{item} ");
            }
        }
    }
}
