namespace _09._Yard_Greening
{
    using System;

    internal class Program
    {
        static void Main(string[] args)
        {
            double size = double.Parse(Console.ReadLine());
            double price = size * 7.61;
            double discount = price * 0.18;
            double finalPrice = price - discount;
            Console.WriteLine("The final price is " + finalPrice + " lv.");
            Console.WriteLine("The discount is " + discount + " lv.");
            Console.ReadLine();
        }
    }
}
