namespace _7._Pascal_Triangle
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());

            long[][] matrix = new long[rows][];

            int countCol = 1;

            for (int row = 0; row < rows; row++)
            {
                matrix[row] = new long[countCol];
                countCol++;
            }

            for (int row = 0; row < rows; row++)
            {
                matrix[row][0] = 1;
            }

            for (int row = 0; row < rows; row++)
            {
                matrix[row][matrix[row].Length - 1] = 1;
            }

            for (int row = 2; row < rows; row++)
            {
                for (int col = 1; col < matrix[row].Length - 1; col++)
                {
                    matrix[row][col] = matrix[row - 1][col] + matrix[row - 1][col - 1];
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
