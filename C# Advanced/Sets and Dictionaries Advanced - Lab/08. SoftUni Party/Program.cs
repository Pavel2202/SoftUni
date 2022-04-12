namespace _08._SoftUni_Party
{
    using System;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            HashSet<string> guests = new HashSet<string>();

            while (true)
            {
                string guest = Console.ReadLine();
                if (guest == "PARTY")
                {
                    break;
                }
                guests.Add(guest);
            }

            while (true)
            {
                string guest = Console.ReadLine();
                if (guest == "END")
                {
                    break;
                }
                if (guests.Contains(guest))
                {
                    guests.Remove(guest);
                }
            }

            HashSet<string> vipGuests = new HashSet<string>();

            List<string> toRemoveGuests = new List<string>();

            foreach (var guest in guests)
            {
                if (guest[0] >= 48 && guest[0] <= 57)
                {
                    vipGuests.Add(guest);
                    toRemoveGuests.Add(guest);
                }
            }

            foreach (var guest in toRemoveGuests)
            {
                guests.Remove(guest);
            }


            Console.WriteLine(guests.Count + vipGuests.Count);

            if (vipGuests.Count > 0)
            {
                foreach (var guest in vipGuests)
                {
                    Console.WriteLine(guest);
                }
            }
            if (guests.Count > 0)
            {
                foreach (var guest in guests)
                {
                    Console.WriteLine(guest);
                }
            }
        }
    }
}
