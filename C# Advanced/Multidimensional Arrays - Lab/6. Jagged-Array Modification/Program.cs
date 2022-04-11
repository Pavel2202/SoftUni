namespace _6._Jagged_Array_Modification
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());

            int[][] matrix = new int[rows][];

            for (int row = 0; row < rows; row++)
            {
                int[] input = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();
                matrix[row] = new int[input.Length];

                for (int col = 0; col < matrix[row].Length; col++)
                {
                    matrix[row][col] = input[col];
                }
            }


            while (true)
            {
                string[] input = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).ToArray();
                string command = input[0];
                if (command == "END")
                {
                    break;
                }
                int row = int.Parse(input[1]);
                int col = int.Parse(input[2]);
                int value = int.Parse(input[3]);

                if (row >= matrix.GetLength(0) || row < 0)
                {
                    Console.WriteLine("Invalid coordinates");
                    continue;
                }
                else if (col >= matrix[row].Length || col < 0)
                {
                    Console.WriteLine("Invalid coordinates");
                    continue;
                }

                if (command == "Add")
                {
                    matrix[row][col] += value;
                }
                else if (command == "Subtract")
                {
                    matrix[row][col] -= value;
                }
            }

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < matrix[row].Length; col++)
                {
                    Console.Write($"{matrix[row][col]} ");
                }
                Console.WriteLine();
            }
        }
    }
}
