namespace _02._Print_Numbers_in_Reverse_Order
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[] array = new int[n];
            for (int i = 0; i < array.Length; i++)
            {
                int num = int.Parse(Console.ReadLine());
                array[i] = num;
            }
            for (int j = array.Length - 1; j >= 0; j--)
            {
                Console.Write($"{array[j]} ");
            }
        }
    }
}
