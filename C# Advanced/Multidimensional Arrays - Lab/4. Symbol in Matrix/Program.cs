namespace _4._Symbol_in_Matrix
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            char[,] matrix = new char[n, n];

            for (int row = 0; row < n; row++)
            {
                string input = Console.ReadLine();

                char[] symbols = new char[n];

                for (int i = 0; i < input.Length; i++)
                {
                    symbols[i] = input[i];
                }

                for (int col = 0; col < n; col++)
                {
                    matrix[row, col] = symbols[col];
                }
            }

            char symbol = char.Parse(Console.ReadLine());

            bool isFound = false;

            int[] parameters = new int[2];

            for (int row = 0; row < n; row++)
            {
                for (int col = 0; col < n; col++)
                {
                    if (matrix[row, col] == symbol)
                    {
                        isFound = true;
                        parameters[0] = row;
                        parameters[1] = col;
                        break;
                    }
                }

                if (isFound)
                {
                    break;
                }
            }

            if (isFound)
            {
                Console.WriteLine($"({string.Join(", ", parameters)})");
            }
            else
            {
                Console.WriteLine($"{symbol} does not occur in the matrix");
            }
        }
    }
}
