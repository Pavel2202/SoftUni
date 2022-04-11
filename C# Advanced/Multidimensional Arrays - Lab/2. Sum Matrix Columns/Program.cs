namespace _2._Sum_Matrix_Columns
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] parameters = Console.ReadLine()
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            int rows = parameters[0];
            int cols = parameters[1];

            int[,] matrix = new int[rows, cols];

            for (int row = 0; row < rows; row++)
            {
                int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[col];
                }
            }

            for (int col = 0; col < cols; col++)
            {
                int sum = 0;
                for (int row = 0; row < rows; row++)
                {
                    sum += matrix[row, col];
                }
                Console.WriteLine(sum);
            }
        }
    }
}
