namespace _03._Calculations
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string calculation = Console.ReadLine();
            double firstNum = double.Parse(Console.ReadLine());
            double secondNum = double.Parse(Console.ReadLine());

            if (calculation == "add")
            {
                AddNumbers(firstNum, secondNum);
            }
            else if (calculation == "subtract")
            {
                SubtactNumbers(firstNum, secondNum);
            }
            else if (calculation == "multiply")
            {
                MultiplyNumbers(firstNum, secondNum);
            }
            else if (calculation == "divide")
            {
                DivideNumbers(firstNum, secondNum);
            }
        }

        static void AddNumbers(double firstNum, double secondNum)
        {
            double sum = firstNum + secondNum;
            Console.WriteLine(sum);
        }

        static void SubtactNumbers(double firstNum, double secondNum)
        {
            double sum = firstNum - secondNum;
            Console.WriteLine(sum);
        }

        static void MultiplyNumbers(double firstNum, double secondNum)
        {
            double sum = firstNum * secondNum;
            Console.WriteLine(sum);
        }

        static void DivideNumbers(double firstNum, double secondNum)
        {
            double sum = firstNum / secondNum;
            Console.WriteLine(sum);
        }
    }
}
