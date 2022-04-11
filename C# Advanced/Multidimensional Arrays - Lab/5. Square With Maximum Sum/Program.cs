namespace _5._Square_With_Maximum_Sum
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
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();
                for (int col = 0; col < cols; col++)
                {
                    matrix[row, col] = input[col];
                }
            }

            int biggestSquareSum = int.MinValue;
            int[,] biggestSquare = new int[2, 2];

            for (int row = 0; row < rows - 1; row++)
            {
                for (int col = 0; col < cols - 1; col++)
                {
                    int square = matrix[row, col] + matrix[row, col + 1] + matrix[row + 1, col] + matrix[row + 1, col + 1];
                    if (square > biggestSquareSum)
                    {
                        biggestSquareSum = square;
                        biggestSquare[0, 0] = matrix[row, col];
                        biggestSquare[0, 1] = matrix[row, col + 1];
                        biggestSquare[1, 0] = matrix[row + 1, col];
                        biggestSquare[1, 1] = matrix[row + 1, col + 1];
                    }
                }
            }

            for (int row = 0; row < 2; row++)
            {
                for (int col = 0; col < 2; col++)
                {
                    Console.Write(biggestSquare[row, col] + " ");
                }
                Console.WriteLine();
            }
            Console.WriteLine(biggestSquareSum);
        }
    }
}
