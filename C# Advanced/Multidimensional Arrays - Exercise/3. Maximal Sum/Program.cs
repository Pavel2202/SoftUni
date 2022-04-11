namespace _3._Maximal_Sum
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

            int[,] biggestSquare = new int[3, 3];
            biggestSquare = GetBiggestSquare(matrix);

            int sum = 0;
            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    sum += biggestSquare[row, col];
                }
            }

            Console.WriteLine($"Sum = {sum}");

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write($"{biggestSquare[row, col]} ");
                }
                Console.WriteLine();
            }

        }

        private static int[,] GetBiggestSquare(int[,] matrix)
        {
            int[,] biggestSquare = new int[3, 3];
            int biggestSum = int.MinValue;
            int rows = matrix.GetLength(0);
            int cols = matrix.GetLength(1);

            for (int row = 0; row < rows - 2; row++)
            {
                for (int col = 0; col < cols - 2; col++)
                {
                    int num = matrix[row, col];
                    int currentSquare = num
                        + matrix[row, col + 1] + matrix[row, col + 2]
                        + matrix[row + 1, col] + matrix[row + 1, col + 1] + matrix[row + 1, col + 2]
                        + matrix[row + 2, col] + matrix[row + 2, col + 1] + matrix[row + 2, col + 2];
                    if (currentSquare > biggestSum)
                    {
                        biggestSum = currentSquare;

                        biggestSquare[0, 0] = num;
                        biggestSquare[0, 1] = matrix[row, col + 1];
                        biggestSquare[0, 2] = matrix[row, col + 2];

                        biggestSquare[1, 0] = matrix[row + 1, col];
                        biggestSquare[1, 1] = matrix[row + 1, col + 1];
                        biggestSquare[1, 2] = matrix[row + 1, col + 2];

                        biggestSquare[2, 0] = matrix[row + 2, col];
                        biggestSquare[2, 1] = matrix[row + 2, col + 1];
                        biggestSquare[2, 2] = matrix[row + 2, col + 2];
                    }
                }
            }

            return biggestSquare;
        }
    }
}
