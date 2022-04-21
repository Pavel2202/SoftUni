using System.Collections;

public class MyCustomStack<T> : IEnumerable<T>
{
    private T[] collection;

    public MyCustomStack()
    {
        this.collection = new T[0];
    }

    public void Push(T element)
    {
        T[] tempCollection = new T[collection.Length + 1];
        collection.CopyTo(tempCollection, 0);
        tempCollection[collection.Length] = element;
        this.collection = tempCollection;
    }

    public void Pop()
    {
        if (collection.Length == 0)
        {
            Console.WriteLine("No elements");
            return;
        }
        T[] tempCollection = new T[collection.Length - 1];
        for (int i = 0; i < tempCollection.Length; i++)
        {
            tempCollection[i] = collection[i];
        }
        collection = tempCollection;
    }

    public IEnumerator<T> GetEnumerator()
    {
        for (int i = collection.Length - 1; i >= 0; i--)
        {
            yield return collection[i];
        }
        for (int i = collection.Length - 1; i >= 0; i--)
        {
            yield return collection[i];
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return this.GetEnumerator();
    }
}
