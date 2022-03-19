namespace _04._Walking
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            int target = 10000;
            int steps = 0;
            int totalSteps = 0;
            int stepDiff = 0;
            int stepsCount = 0;

            while (true)
            {
                string input = Console.ReadLine();
                if (input == "Going home")
                {
                    int stepsHome = int.Parse(Console.ReadLine());
                    stepsCount = totalSteps + stepsHome;
                    stepDiff = Math.Abs(target - stepsCount);

                    if (stepsCount >= target)
                    {
                        Console.WriteLine("Goal reached! Good job!");
                        Console.WriteLine($"{stepDiff} steps over the goal!");
                    }
                    else
                    {
                        Console.WriteLine($"{stepDiff} more steps to reach goal.");
                    }

                    break;
                }

                steps = int.Parse(input);
                totalSteps = totalSteps + steps;

                if (totalSteps >= target)
                {
                    stepDiff = totalSteps - target;
                    Console.WriteLine("Goal reached! Good job!");
                    Console.WriteLine($"{stepDiff} steps over the goal!");
                    break;
                }
            }
        }
    }
}
