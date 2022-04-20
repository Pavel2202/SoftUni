namespace _08._Threeuple
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Threeuple<O1, O2, O3>
    {
        public O1 Object1 { get; set; }
        public O2 Object2 { get; set; }
        public O3 Object3 { get; set; }

        public Threeuple(O1 object1, O2 object2, O3 object3)
        {
            Object1 = object1;
            Object2 = object2;
            Object3 = object3;
        }

        public override string ToString()
        {
            return $"{this.Object1} -> {this.Object2} -> {this.Object3}";
        }
    }
}
