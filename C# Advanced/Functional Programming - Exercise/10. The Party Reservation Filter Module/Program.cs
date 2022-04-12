﻿namespace _10._The_Party_Reservation_Filter_Module
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            var guest = new List<string>(Console.ReadLine().Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries));
            var filters = new List<string>();
            string input = Console.ReadLine();

            while (input != "Print")
            {
                var commands = input.Split(";", StringSplitOptions.RemoveEmptyEntries);
                if (commands[0] == "Add filter")
                {
                    filters.Add(commands[1] + " " + commands[2]);
                }
                else if (commands[0] == "Remove filter")
                {
                    filters.Remove(commands[1] + " " + commands[2]);
                }

                input = Console.ReadLine();
            }

            foreach (var filter in filters)
            {
                var commands = filter.Split(' ');
                if (commands[0] == "Starts")
                {
                    guest = guest.Where(p => !p.StartsWith((commands[2]))).ToList();
                }
                else if (commands[0] == "Ends")
                {
                    guest = guest.Where(p => !p.EndsWith((commands[2]))).ToList();
                }
                else if (commands[0] == "Length")
                {
                    guest = guest.Where(p => p.Length != int.Parse(commands[1])).ToList();
                }
                else if (commands[0] == "Contains")
                {
                    guest = guest.Where(p => !p.Contains(commands[1])).ToList();
                }
            }

            if (guest.Any())
            {
                Console.WriteLine(string.Join(" ", guest));
            }
        }
    }
}
