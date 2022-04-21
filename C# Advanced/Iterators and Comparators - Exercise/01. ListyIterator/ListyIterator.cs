using System;
using System.Collections.Generic;

public class ListyIterator<T>
{
    private List<T> collection;
    private static int internalIndex;

    public ListyIterator()
    {
        collection = new List<T>();
        internalIndex = 0;
    }

    public void Create(List<T> elements)
    {
        this.collection = new List<T>();
        this.collection.AddRange(elements);
        internalIndex = 0;
    }

    public bool Move()
    {
        if (internalIndex < collection.Count - 1)
        {
            internalIndex++;
            return true;
        }
        return false;
    }

    public bool HasNext()
    {
        if (internalIndex == collection.Count - 1)
        {
            return false;
        }
        return true;
    }

    public void Print()
    {
        try
        {
            Console.WriteLine(collection[internalIndex]);
        }
        catch (ArgumentException)
        {
            throw new ArgumentException("Invalid Operation!");
        }
    }
}
