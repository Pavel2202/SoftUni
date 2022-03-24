namespace _09._Greater_of_Two_Values
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine();

            switch (type)
            {
                case "int":
                    int firstNum = int.Parse(Console.ReadLine());
                    int secondNum = int.Parse(Console.ReadLine());
                    int result = (GetMaxInt(firstNum, secondNum));
                    Console.WriteLine(result);
                    break;
                case "string":
                    string firstText = Console.ReadLine();
                    string secondText = Console.ReadLine();
                    string textResult = GetMaxString(firstText, secondText);
                    Console.WriteLine(textResult);
                    break;
                case "char":
                    char firstLetter = char.Parse(Console.ReadLine());
                    char secondLetter = char.Parse(Console.ReadLine());
                    char letterResult = GetMaxChar(firstLetter, secondLetter);
                    Console.WriteLine(letterResult);
                    break;
            }
        }

        static int GetMaxInt(int firstNum, int secondNum)
        {
            int maxNum = 0;
            if (firstNum > secondNum)
            {
                maxNum = firstNum;
            }
            else
            {
                maxNum = secondNum;
            }
            return maxNum;
        }

        static string GetMaxString(string firstText, string secondText)
        {
            string maxText = "";
            if (firstText.CompareTo(secondText) >= 0)
            {
                maxText = firstText;
            }
            else
            {
                maxText = secondText;
            }
            return maxText;
        }

        static char GetMaxChar(char firstLetter, char secondLetter)
        {
            char biggerChar;
            if (firstLetter >= secondLetter)
            {
                biggerChar = firstLetter;
            }
            else
            {
                biggerChar = secondLetter;
            }
            return biggerChar;
        }
    }
}
