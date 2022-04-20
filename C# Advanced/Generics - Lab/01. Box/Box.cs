namespace _01._Box
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Box<T>
    {
        private List<T> data;

        public Box()
        {
            data = new List<T>();
        }

        public int Count { get { return data.Count; } }

        public void Add(T element)
        {
            data.Insert(0, element);
        }

        public T Remove()
        {
            T element = data[0];
            data.RemoveAt(0);
            return element;
        }
    }
}
