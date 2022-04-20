namespace _03._Generic_Swap_Method_String
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Box<T>
    {
        public Box(T element)
        {
            this.Element = element;
        }

        public T Element { get; set; }

        public override string ToString()
        {
            return $"{typeof(T)}: {this.Element}";
        }
    }
}
