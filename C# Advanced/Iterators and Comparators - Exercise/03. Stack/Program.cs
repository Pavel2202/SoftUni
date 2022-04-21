public class Stack
{
    static void Main(string[] args)
    {
        MyCustomStack<string> customStack = new MyCustomStack<string>();
        string command = Console.ReadLine();
        while (command != "END")
        {
            string[] commandSplit = command.Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);
            if (commandSplit[0] == "Push")
            {
                for (int i = 1; i < commandSplit.Length; i++)
                {
                    customStack.Push(commandSplit[i]);
                }
            }
            else if (commandSplit[0] == "Pop")
            {
                customStack.Pop();
            }
            command = Console.ReadLine();
        }
        foreach (var item in customStack)
        {
            Console.WriteLine(item);
        }
    }
}