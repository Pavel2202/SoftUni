namespace _04._Sum_of_Two_Numbers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int start = int.Parse(Console.ReadLine());
            int end = int.Parse(Console.ReadLine());
            int magicNum = int.Parse(Console.ReadLine());
            int sum = 0;
            int combinationCount = 0;
            bool isFound = false;

            for (int numOne = start; numOne <= end; numOne++)
            {
                for (int numTwo = start; numTwo <= end; numTwo++)
                {
                    combinationCount++;
                    sum = numOne + numTwo;

                    if (sum == magicNum)
                    {
                        Console.WriteLine($"Combination N:{combinationCount} ({numOne} + {numTwo} = {magicNum})");
                        isFound = true;
                        break;
                    }
                }
                if (isFound)
                {
                    break;
                }
            }
            if (!isFound)
            {
                Console.WriteLine($"{combinationCount} combinations - neither equals {magicNum}");
            }
        }
    }
}
