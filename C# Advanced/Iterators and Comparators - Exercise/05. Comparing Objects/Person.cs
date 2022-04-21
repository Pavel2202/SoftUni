public class Person : IComparable<Person>
{
    public string Name { get; }
    public int Age { get; }
    public string Town { get; }

    public Person(string name, int age, string town)
    {
        this.Name = name;
        this.Age = age;
        this.Town = town;
    }

    public int CompareTo(Person other)
    {
        int comparison = 0;
        if (this.Name.CompareTo(other.Name) != 0)
        {
            comparison = this.Name.CompareTo(other.Name);
        }
        if (this.Age.CompareTo(other.Age) != 0)
        {
            comparison = this.Age.CompareTo(other.Age);
        }
        if (this.Town.CompareTo(other.Town) != 0)
        {
            comparison = this.Town.CompareTo(other.Town);
        }
        return comparison;
    }
}