namespace _11._TriFunction
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string[] names = Console.ReadLine()
                .Split().ToArray();

            string answer = string.Empty;
            foreach (var name in names)
            {
                int currentName = 0;
                for (int i = 0; i < name.Length; i++)
                {
                    currentName += name[i];
                }
                if (currentName >= n)
                {
                    answer = name;
                    break;
                }
            }
            Console.WriteLine(answer);
        }
    }
}
