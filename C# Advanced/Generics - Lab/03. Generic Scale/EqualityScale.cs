﻿namespace _03._Generic_Scale
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class EqualityScale<T>
    {
        public EqualityScale(T left, T right)
        {
            this.Left = left;
            this.Right = right;
        }

        public T Left { get; set; }

        public T Right { get; set; }

        public bool AreEqual()
        {
            return Left.Equals(Right);
        }
    }
}
