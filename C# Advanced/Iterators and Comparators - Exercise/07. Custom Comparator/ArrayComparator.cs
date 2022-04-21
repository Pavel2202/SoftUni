namespace _07._Custom_Comparator
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class ArrayComparator
    {
        private int[] numbers;

        public ArrayComparator(int[] numbers)
        {
            this.numbers = numbers;
        }

        public static int[] Sort(int[] numbers)
        {
            int[] result = new int[numbers.Length];

            int[] evenNumbers = numbers
                .Where(x => x % 2 == 0)
                .ToArray();

            int[] oddNumbers = numbers
                .Where(x => x % 2 != 0)
                .ToArray();

            int index = 0;

            for (int i = 0; i < evenNumbers.Length; i++)
            {
                result[index] = evenNumbers[i];
                index++;
            }

            for (int i = 0; i < oddNumbers.Length; i++)
            {
                result[index] = oddNumbers[i];
                index++;
            }

            return result;
        }
    }
}
