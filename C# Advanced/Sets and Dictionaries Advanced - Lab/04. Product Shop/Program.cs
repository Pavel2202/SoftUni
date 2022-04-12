namespace _04._Product_Shop
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, double>> shops = new Dictionary<string, Dictionary<string, double>>();

            while (true)
            {
                string[] input = Console.ReadLine()
                    .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                    .ToArray();
                string shop = input[0];
                if (shop == "Revision")
                {
                    break;
                }

                if (!shops.ContainsKey(shop))
                {
                    shops.Add(shop, new Dictionary<string, double>());
                }

                string product = input[1];
                double price = double.Parse(input[2]);
                if (!shops[shop].ContainsKey(product))
                {
                    shops[shop].Add(product, price);
                }

            }

            shops = shops.OrderBy(x => x.Key).ToDictionary(k => k.Key, v => v.Value);

            foreach (var shop in shops)
            {
                Console.WriteLine($"{shop.Key}->");
                foreach (var product in shop.Value)
                {
                    Console.WriteLine($"Product: {product.Key}, Price: {product.Value}");
                }
            }
        }
    }
}
