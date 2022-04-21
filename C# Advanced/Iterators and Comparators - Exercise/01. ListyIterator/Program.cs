using System;
using System.Collections.Generic;

class Pr1ListyIterator
{
    static void Main(string[] args)
    {
        string input = Console.ReadLine();
        ListyIterator<string> collection = new ListyIterator<string>();
        while (input != "END")
        {
            string[] command = input.Split();
            string commandType = command[0];
            switch (commandType)
            {
                case "Create":
                    List<string> givenCollection = new List<string>();
                    for (int i = 1; i < command.Length; i++)
                    {
                        givenCollection.Add(command[i]);
                    }
                    collection.Create(givenCollection);
                    break;
                case "Move":
                    Console.WriteLine(collection.Move());
                    break;
                case "HasNext":
                    Console.WriteLine(collection.HasNext());
                    break;
                case "Print":
                    try
                    {
                        collection.Print();
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e.Message);
                    }
                    break;
            }
            input = Console.ReadLine();
        }
    }
}
