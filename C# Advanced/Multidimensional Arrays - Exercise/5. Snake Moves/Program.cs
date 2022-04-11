namespace _5._Snake_Moves
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

            string text = Console.ReadLine();

            int currentIndex = 0;

            for (int row = 0; row < rows; row++)
            {
                if (row % 2 == 0)
                {
                    for (int col = 0; col < cols; col++)
                    {
                        matrix[row, col] = text[currentIndex];
                        currentIndex++;
                        if (currentIndex >= text.Length)
                        {
                            currentIndex = 0;
                        }
                    }
                }
                else if (row % 2 != 0)
                {
                    for (int col = cols - 1; col >= 0; col--)
                    {
                        matrix[row, col] = text[currentIndex];
                        currentIndex++;
                        if (currentIndex >= text.Length)
                        {
                            currentIndex = 0;
                        }
                    }
                }
            }

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    Console.Write($"{matrix[row, col]}");
                }
                Console.WriteLine();
            }
        }
    }
}
