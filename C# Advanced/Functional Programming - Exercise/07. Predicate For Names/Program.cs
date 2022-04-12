namespace _07._Predicate_For_Names
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int len = int.Parse(Console.ReadLine());

            Predicate<string> filter = name => name.Length <= len;

            string[] names = Console.ReadLine()
                .Split();

            foreach (var name in names.Where(name => filter(name)))
            {
                Console.WriteLine(name);
            }
        }
    }
}
