namespace _06._Operations_Between_Numbers
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double firstNum = double.Parse(Console.ReadLine());
            double secondNum = double.Parse(Console.ReadLine());
            string symbol = Console.ReadLine();
            double sum = 0;
            string evenOdd = "";
            switch (symbol)
            {
                case "+":
                    sum = firstNum + secondNum;
                    if (sum % 2 == 0)
                    {
                        evenOdd = "even";
                    }
                    else
                    {
                        evenOdd = "odd";
                    }
                    Console.WriteLine($"{firstNum} {symbol} {secondNum} = {sum} - {evenOdd}");
                    break;
                case "-":
                    sum = firstNum - secondNum;
                    if (sum % 2 == 0)
                    {
                        evenOdd = "even";
                    }
                    else
                    {
                        evenOdd = "odd";
                    }
                    Console.WriteLine($"{firstNum} {symbol} {secondNum} = {sum} - {evenOdd}");
                    break;
                case "*":
                    sum = firstNum * secondNum;
                    if (sum % 2 == 0)
                    {
                        evenOdd = "even";
                    }
                    else
                    {
                        evenOdd = "odd";
                    }
                    Console.WriteLine($"{firstNum} {symbol} {secondNum} = {sum} - {evenOdd}");
                    break;
                case "/":
                    sum = firstNum / secondNum;
                    if (secondNum == 0)
                    {
                        Console.WriteLine($"Cannot divide {firstNum} by zero");
                    }
                    else
                    {
                        Console.WriteLine($"{firstNum} / {secondNum} = {sum:f2}");
                    }
                    break;
                case "%":
                    sum = firstNum % secondNum;
                    if (secondNum == 0)
                    {
                        Console.WriteLine($"Cannot divide {firstNum} by zero");
                    }
                    else
                    {
                        Console.WriteLine($"{firstNum} % {secondNum} = {sum}");
                    }
                    break;
            }
        }
    }
}
