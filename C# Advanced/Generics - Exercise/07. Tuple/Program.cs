namespace _07._Tuple
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string[] nameAndAdress = Console.ReadLine().Split();
            string fullName = nameAndAdress[0] + " " + nameAndAdress[1];
            string address = nameAndAdress[2];
            Tuple<string, string> firstTuple = new Tuple<string, string>(fullName, address);

            string[] personAndBeer = Console.ReadLine().Split();
            string name = personAndBeer[0];
            int beer = int.Parse(personAndBeer[1]);
            Tuple<string, int> secondTuple = new Tuple<string, int>(name, beer);

            string[] integerAndDouble = Console.ReadLine().Split();
            int firstNum = int.Parse(integerAndDouble[0]);
            double secondNum = double.Parse(integerAndDouble[1]);
            Tuple<int, double> thirdTuple = new Tuple<int, double>(firstNum, secondNum);

            Console.WriteLine(firstTuple);
            Console.WriteLine(secondTuple);
            Console.WriteLine(thirdTuple);
        }
    }
}
