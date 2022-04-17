public class Family
{
    public Family()
    {
        this.OrderPersons = new List<Person>();
    }

    public List<Person> OrderPersons { get; set; }

    public void AddMember(Person member)
    {
        OrderPersons.Add(member);
    }

    public void GetOldestMember()
    {
        var currentPersona = new Person { Name = "one", Age = -1 };
        foreach (var kvp in OrderPersons)
        {
            if (currentPersona.Age < kvp.Age)
            {
                currentPersona = kvp;
            }
        }

        Console.WriteLine("{0} {1}", currentPersona.Name, currentPersona.Age);
    }

}