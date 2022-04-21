public class Collection
{
    static void Main(string[] args)
    {
        string[] elements = Console.ReadLine().Split();
        List<string> inputCollection = new List<string>();
        for (int i = 1; i < elements.Length; i++)
        {
            inputCollection.Add(elements[i]);
        }
        ListyIterator<string> listy = new ListyIterator<string>();
        listy.Create(inputCollection);
        string command = Console.ReadLine();
        while (command != "END")
        {
            switch (command)
            {
                case "Move":
                    Console.WriteLine(listy.Move());
                    break;
                case "HasNext":
                    Console.WriteLine(listy.HasNext());
                    break;
                case "Print":
                    try
                    {
                        listy.Print();
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e.Message);
                    }
                    break;
                case "PrintAll":
                    listy.PrintAll();
                    break;
            }
            command = Console.ReadLine();
        }
    }
}