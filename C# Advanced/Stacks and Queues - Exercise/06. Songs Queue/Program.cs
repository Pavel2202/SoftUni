namespace _06._Songs_Queue
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            string[] line = Console.ReadLine()
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            Queue<string> songs = new Queue<string>(line);

            while (true)
            {
                string[] input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).ToArray();
                string command = input[0];



                if (command == "Play")
                {
                    songs.Dequeue();
                }
                else if (command == "Add")
                {
                    string song = string.Empty;
                    for (int i = 1; i < input.Length - 1; i++)
                    {
                        song += input[i] + " ";
                    }
                    song += input[input.Length - 1];
                    if (!songs.Contains(song))
                    {
                        songs.Enqueue(song);
                    }
                    else
                    {
                        Console.WriteLine($"{song} is already contained!");
                    }
                }
                else if (command == "Show")
                {
                    Console.WriteLine(string.Join(", ", songs));
                }

                if (songs.Count == 0)
                {
                    Console.WriteLine("No more songs!");
                    break;
                }
            }
        }
    }
}
