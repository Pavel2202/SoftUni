using System.Collections;

public class Lake : IEnumerable<Stone>
{
    public List<Stone> Stones { get; }

    public Lake()
    {
        Stones = new List<Stone>();
    }

    public IEnumerator<Stone> GetEnumerator()
    {
        for (int i = 0; i < Stones.Count; i += 2)
        {
            yield return Stones[i];
        }
        int lastEvenPosition = Stones.Count - 1;
        if (Stones.Count % 2 == 1)
        {
            lastEvenPosition--;
        }
        for (int i = lastEvenPosition; i >= 0; i -= 2)
        {
            yield return Stones[i];
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return this.GetEnumerator();
    }
}