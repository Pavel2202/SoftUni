﻿namespace _06._Equality_Logic
{

    public class Person : IComparable<Person>
    {
        private string name;
        private int age;

        public Person(string name, int age)
        {
            this.name = name.ToLower();
            this.age = age;
        }

        public string Name { get; set; }

        public int Age { get; set; }

        public int CompareTo(Person? other)
        {
            int result = this.name.CompareTo(other.name);

            if (result == 0)
            {
                result = this.age.CompareTo(other.age);
            }

            return result;
        }

        public override bool Equals(object? obj)
        {
            var other = obj as Person;

            return this.name == other.name && this.age == other.age;
        }

        public override int GetHashCode()
        {
            var hashCode = this.name.Length * 10000;
            hashCode = this.name.Aggregate(hashCode, (current, letter) => current + letter);
            hashCode += this.age * 10000;

            return hashCode;
        }
    }
}
