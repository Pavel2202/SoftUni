namespace _07._Custom_Comparator
{
    public class CustomComparator
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine()
                .Split(" ")
                .Select(int.Parse)
                .ToArray();

            var result = ArrayComparator.Sort(numbers);

            Console.WriteLine(string.Join(" ", result));
        }
    }
}