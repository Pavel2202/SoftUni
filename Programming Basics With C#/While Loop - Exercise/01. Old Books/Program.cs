namespace _01._Old_Books
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string book = Console.ReadLine();
            int bookCount = 0;
            while (true)
            {
                string command = Console.ReadLine();
                if (command == book)
                {
                    Console.WriteLine($"You checked {bookCount} books and found it.");
                    break;
                }
                if (command == "No More Books")
                {
                    Console.WriteLine("The book you search is not here!");
                    Console.WriteLine($"You checked {bookCount} books.");
                    break;
                }
                bookCount++;
            }
        }
    }
}
