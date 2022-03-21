namespace _04._Reverse_Array_of_Strings
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            string[] inputArray = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            for (int i = inputArray.Length - 1; i >= 0; i--)
            {
                Console.Write($"{inputArray[i]} ");
            }
        }
    }
}
