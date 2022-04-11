namespace _08._Balanced_Parenthesis
{
    using System;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            Stack<int> paranthesies = new Stack<int>();
            bool isBalanced = true;

            for (int i = 0; i < line.Length; i++)
            {
                if ((int)line[i] == 40 || (int)line[i] == 91 || (int)line[i] == 123)
                {
                    paranthesies.Push((int)line[i]);
                }
                else
                {
                    if (paranthesies.Count > 0)
                    {
                        if ((int)line[i] == 41)
                        {
                            int prev = paranthesies.Pop();
                            if (prev == 40)
                            {
                                isBalanced = true;
                            }
                            else
                            {
                                isBalanced = false;
                                break;
                            }
                        }
                        else if ((int)line[i] == 93)
                        {
                            int prev = paranthesies.Pop();
                            if (prev == 91)
                            {
                                isBalanced = true;
                            }
                            else
                            {
                                isBalanced = false;
                                break;
                            }
                        }
                        else if ((int)line[i] == 125)
                        {
                            int prev = paranthesies.Pop();
                            if (prev == 123)
                            {
                                isBalanced = true;
                            }
                            else
                            {
                                isBalanced = false;
                                break;
                            }
                        }
                    }
                    else
                    {
                        isBalanced = false;
                        break;
                    }
                }
            }

            if (!isBalanced)
            {
                Console.WriteLine("NO");
            }
            else
            {
                Console.WriteLine("YES");
            }
        }
    }
}
