namespace _08._On_Time_for_the_Exam
{
    using System;
    using System.Globalization;

    internal class Program
    {
        static void Main(string[] args)
        {
            int hoursExam = int.Parse(Console.ReadLine());
            int minutesExam = int.Parse(Console.ReadLine());
            int hoursArrival = int.Parse(Console.ReadLine());
            int minutesArrival = int.Parse(Console.ReadLine());

            string izpithrs = hoursExam.ToString() + ":" + minutesExam.ToString("00");
            string arrivalhrs = hoursArrival.ToString() + ":" + minutesArrival.ToString("00");

            DateTime examHours = DateTime.ParseExact((izpithrs), "H:mm", CultureInfo.InvariantCulture);
            DateTime arrivaltime = DateTime.ParseExact((arrivalhrs), "H:mm", CultureInfo.InvariantCulture);

            if (arrivaltime > examHours)
            {
                Console.WriteLine("Late");

                if (arrivaltime > examHours && arrivaltime <= examHours.AddMinutes(59))
                {
                    Console.WriteLine(
                        (((DateTime)arrivaltime - (DateTime)examHours).TotalMinutes).ToString() +
                        " minutes after the start");
                }

                else
                {
                    Console.WriteLine(
                        (((DateTime)examHours - (DateTime)arrivaltime)).ToString("h\\:mm") +
                        " hours after the start");
                }
            }

            else if (arrivaltime == examHours)
            {
                Console.WriteLine("On time");
            }

            else if (arrivaltime < examHours)
            {
                if (arrivaltime < examHours && arrivaltime >= examHours.AddMinutes(-30))
                {
                    Console.WriteLine("On time");
                    Console.WriteLine(
                        (((DateTime)examHours - (DateTime)arrivaltime).TotalMinutes).ToString() +
                        " minutes before the start");
                }

                else if (arrivaltime < examHours && arrivaltime >= examHours.AddMinutes(-59))
                {
                    Console.WriteLine("Early");
                    Console.WriteLine(
                        (((DateTime)examHours - (DateTime)arrivaltime).TotalMinutes).ToString() +
                        " minutes before the start");
                }

                else
                {
                    Console.WriteLine("Early");
                    Console.WriteLine(
                        (((DateTime)examHours - (DateTime)arrivaltime)).ToString("h\\:mm") +
                        " hours before the start");
                }
            }
        }
    }
}
