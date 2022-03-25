namespace _07._List_Manipulation_Advanced
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();

            bool isChanged = false;

            while (true)
            {
                string[] command = Console.ReadLine().Split().ToArray();
                string type = command[0];

                if (type == "end")
                {
                    if (isChanged)
                    {
                        Console.WriteLine(string.Join(" ", numbers));
                    }
                    break;
                }
                else if (type == "Contains")
                {
                    int containNum = int.Parse(command[1]);

                    if (numbers.Contains(containNum))
                    {
                        Console.WriteLine("Yes");
                    }
                    else
                    {
                        Console.WriteLine("No such number");
                    }
                }
                else if (type == "PrintEven")
                {
                    for (int i = 0; i < numbers.Count; i++)
                    {
                        if (numbers[i] % 2 == 0)
                        {
                            Console.Write($"{numbers[i]} ");
                        }
                    }
                    Console.WriteLine();
                }
                else if (type == "PrintOdd")
                {
                    for (int i = 0; i < numbers.Count; i++)
                    {
                        if (numbers[i] % 2 != 0)
                        {
                            Console.Write($"{numbers[i]} ");
                        }
                    }
                    Console.WriteLine();
                }
                else if (type == "GetSum")
                {
                    int sum = 0;
                    for (int i = 0; i < numbers.Count; i++)
                    {
                        sum += numbers[i];
                    }
                    Console.WriteLine(sum);
                }
                else if (type == "Filter")
                {
                    string condition = command[1];
                    int number = int.Parse(command[2]);
                    switch (condition)
                    {
                        case ">":
                            foreach (var item in numbers)
                            {
                                if (item > number)
                                {
                                    Console.Write($"{item} ");
                                }
                            }
                            break;
                        case ">=":
                            foreach (var item in numbers)
                            {
                                if (item >= number)
                                {
                                    Console.Write($"{item} ");
                                }
                            }
                            break;
                        case "<":
                            foreach (var item in numbers)
                            {
                                if (item < number)
                                {
                                    Console.Write($"{item} ");
                                }
                            }
                            break;
                        case "<=":
                            foreach (var item in numbers)
                            {
                                if (item <= number)
                                {
                                    Console.Write($"{item} ");
                                }
                            }
                            break;
                    }
                    Console.WriteLine();
                }
                else if (type == "Add")
                {
                    int addNum = int.Parse(command[1]);
                    numbers.Add(addNum);
                    isChanged = true;
                }
                else if (type == "Remove")
                {
                    int removeNum = int.Parse(command[1]);
                    numbers.Remove(removeNum);
                    isChanged = true;
                }
                else if (type == "RemoveAt")
                {
                    int removeAtIndex = int.Parse(command[1]);
                    numbers.RemoveAt(removeAtIndex);
                    isChanged = true;
                }
                else if (type == "Insert")
                {
                    int index = int.Parse(command[1]);
                    int number = int.Parse(command[2]);
                    numbers.Insert(number, index);
                    isChanged = true;
                }
            }
        }
    }
}
