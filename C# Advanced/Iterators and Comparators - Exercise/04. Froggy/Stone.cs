public class Stone
{
    private int number;

    public Stone(int number)
    {
        this.Number = number;
    }

    public int Number { get; }

    public override string ToString()
    {
        return this.Number.ToString();
    }
}