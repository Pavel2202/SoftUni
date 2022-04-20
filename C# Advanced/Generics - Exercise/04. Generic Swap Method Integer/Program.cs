using System;
using System.Collections.Generic;
using System.Linq;

namespace _04._Generic_Swap_Method_Integer
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            List<Box<int>> boxes = new List<Box<int>>();

            for (int i = 0; i < n; i++)
            {
                Box<int> box = new Box<int>(int.Parse(Console.ReadLine()));
                boxes.Add(box);
            }

            int[] indices = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            int firstIndex = indices[0];
            int secondIndex = indices[1];

            SwapBoxes(boxes, firstIndex, secondIndex);

            boxes.ForEach(Console.WriteLine);
        }

        public static void SwapBoxes<T>(List<Box<T>> boxes, int i1, int i2)
        {
            Box<T> tmp = boxes[i1];
            boxes[i1] = boxes[i2];
            boxes[i2] = tmp;
        }
    }
}
