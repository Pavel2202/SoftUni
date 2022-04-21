public class Froggy
{
    static void Main()
    {
        Lake lake = new Lake();
        int[] numbers = Console.ReadLine()
            .Split(new char[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries)
            .Select(int.Parse)
            .ToArray();

        foreach (var number in numbers)
        {
            Stone stone = new Stone(number);
            lake.Stones.Add(stone);
        }

        Console.WriteLine(string.Join(", ", lake));
    }
}