namespace _1._Diagonal_Difference
{
    using System;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] matrix = new int[n, n];

            for (int row = 0; row < n; row++)
            {
                int[] input = Console.ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .Select(int.Parse)
                    .ToArray();

                for (int col = 0; col < n; col++)
                {
                    matrix[row, col] = input[col];
                }
            }


            int firstDiagonalSum = 0;
            int secondDiagonalSum = 0;

            for (int i = 0; i < n; i++)
            {
                firstDiagonalSum += matrix[i, i];
            }

            int secondDiagonalCol = 0;
            for (int row = n - 1; row >= 0; row--)
            {
                secondDiagonalSum += matrix[row, secondDiagonalCol];
                secondDiagonalCol++;
            }

            int result = Math.Abs(firstDiagonalSum - secondDiagonalSum);
            Console.WriteLine(result);
        }
    }
}
