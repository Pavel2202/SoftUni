namespace _06._Equality_Logic
{
    public class EqualityLogic
    {
        static void Main(string[] args)
        {
            var hashSet = new HashSet<Person>();
            var sortedSet = new SortedSet<Person>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] data = Console.ReadLine()
                    .Split(" ").ToArray();

                string name = data[0];
                int age = int.Parse(data[1]);

                Person person = new Person(name, age);

                hashSet.Add(person);
                sortedSet.Add(person);
            }

            Console.WriteLine(sortedSet.Count);
            Console.WriteLine(hashSet.Count);
        }
    }
}