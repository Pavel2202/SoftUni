namespace _06._Cake
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double width = double.Parse(Console.ReadLine());
            double height = double.Parse(Console.ReadLine());
            double totalPieces = width * height;
            double piecesTaken = 0;
            double piecesDiff = 0;

            while (true)
            {
                string input = Console.ReadLine();

                if (input == "STOP")
                {
                    piecesDiff = Math.Abs(totalPieces - piecesTaken);
                    Console.WriteLine($"{piecesDiff} pieces are left.");
                    break;
                }

                double pieces = double.Parse(input);
                piecesTaken = piecesTaken + pieces;

                if (piecesTaken > totalPieces)
                {
                    piecesDiff = Math.Abs(totalPieces - piecesTaken);
                    Console.WriteLine($"No more cake left! You need {piecesDiff} pieces more.");
                    break;
                }
            }
        }
    }
}
