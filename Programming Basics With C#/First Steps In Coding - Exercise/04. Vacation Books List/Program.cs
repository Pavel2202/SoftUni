namespace _04._Vacation_Books_List
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int pagesCount = int.Parse(Console.ReadLine());
            int pagesForAnHour = int.Parse(Console.ReadLine());
            int days = int.Parse(Console.ReadLine());

            int totalHours = pagesCount / pagesForAnHour;
            int hoursNeeded = totalHours / days;

            Console.WriteLine(hoursNeeded);
        }
    }
}
