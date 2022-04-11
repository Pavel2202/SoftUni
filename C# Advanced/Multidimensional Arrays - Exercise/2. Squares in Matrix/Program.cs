namespace _2._Squares_in_Matrix
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int[] dimensions = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            int rows = dimensions[0];
            int cols = dimensions[1];

            char[,] matrix = new char[rows, cols];

            for (int row = 0; row < rows; row++)
            {
                char[] input = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .Select(char.Parse)
                    .ToArray();

                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[col];
                }
            }

            int count = CheckCount(matrix);
            Console.WriteLine(count);
        }

        private static int CheckCount(char[,] matrix)
        {
            int rows = matrix.GetLength(0);
            int cols = matrix.GetLength(1);

            int count = 0;

            for (int row = 0; row < rows - 1; row++)
            {
                for (int col = 0; col < cols - 1; col++)
                {
                    char currentSymbol = matrix[row, col];
                    if (currentSymbol == matrix[row, col + 1]
                        && currentSymbol == matrix[row + 1, col]
                        && currentSymbol == matrix[row + 1, col + 1])
                    {
                        count++;
                    }
                }
            }

            return count;
        }
    }
}
