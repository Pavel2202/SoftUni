public class Program
{
    public static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        var currentFamily = new Family();

        for (int i = 0; i < n; i++)
        {
            string[] input = Console.ReadLine()
                .Split();

            var member = new Person(input[0], int.Parse(input[1]));

            currentFamily.AddMember(member);
        }

        if (currentFamily.OrderPersons.Count > 0)
        {
            currentFamily.GetOldestMember();
        }

    }
}