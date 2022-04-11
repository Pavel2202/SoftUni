namespace _6._Jagged_Array_Manipulator
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());

            double[][] matrix = new double[rows][];

            for (int row = 0; row < rows; row++)
            {
                int[] input = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();

                matrix[row] = new double[input.Length];

                for (int col = 0; col < matrix[row].Length; col++)
                {
                    matrix[row][col] = input[col];
                }
            }

            for (int row = 0; row < rows - 1; row++)
            {
                if (matrix[row].Length == matrix[row + 1].Length)
                {
                    for (int col = 0; col < matrix[row].Length; col++)
                    {
                        matrix[row][col] *= 2;
                        matrix[row + 1][col] *= 2;
                    }
                }
                else
                {
                    for (int col = 0; col < matrix[row].Length; col++)
                    {
                        matrix[row][col] /= 2;
                    }
                    for (int col = 0; col < matrix[row + 1].Length; col++)
                    {
                        matrix[row + 1][col] /= 2;
                    }
                }
            }

            while (true)
            {
                string[] line = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();

                string command = line[0];

                if (command == "End")
                {
                    break;
                }
                else if (command == "Add")
                {
                    int row = int.Parse(line[1]);
                    int col = int.Parse(line[2]);
                    int value = int.Parse(line[3]);
                    bool isValid = CheckCoordinates(matrix, row, col);
                    if (isValid)
                    {
                        matrix[row][col] += value;
                    }
                }
                else if (command == "Subtract")
                {
                    int row = int.Parse(line[1]);
                    int col = int.Parse(line[2]);
                    int value = int.Parse(line[3]);
                    bool isValid = CheckCoordinates(matrix, row, col);
                    if (isValid)
                    {
                        matrix[row][col] -= value;
                    }
                }
            }

            PrintMatrix(matrix);
        }

        private static bool CheckCoordinates(double[][] matrix, int row, int col)
        {
            if (row >= 0 && row < matrix.GetLength(0))
            {
                if (col >= 0 && col < matrix[row].Length)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        private static void PrintMatrix(double[][] matrix)
        {
            for (int row = 0; row < matrix.GetLength(0); row++)
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
