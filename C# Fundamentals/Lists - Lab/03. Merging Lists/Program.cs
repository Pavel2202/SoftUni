namespace _03._Merging_Lists
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> nums1 = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();

            List<int> nums2 = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();

            List<int> resultNums = new List<int>();

            int firstIndex = 0;
            int secondIndex = 0;

            for (int i = 0; i < Math.Min(nums1.Count, nums2.Count) * 2; i++)
            {
                if (i % 2 == 0)
                {
                    resultNums.Add(nums1[firstIndex]);
                    firstIndex++;
                }
                else
                {
                    resultNums.Add(nums2[secondIndex]);
                    secondIndex++;
                }
            }

            if (nums1.Count > nums2.Count)
                resultNums.AddRange(GetRemainingElements(nums1, nums2));

            else if (nums2.Count > nums1.Count)
                resultNums.AddRange(GetRemainingElements(nums2, nums1));

            Console.WriteLine(string.Join(" ", resultNums));
        }

        static List<int> GetRemainingElements(List<int> longerList, List<int> shorterList)
        {
            List<int> nums = new List<int>();

            for (int i = shorterList.Count; i < longerList.Count; i++)
                nums.Add(longerList[i]);

            return nums;
        }
    }
}
