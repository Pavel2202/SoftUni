namespace _03._ComparableBook
{
    using System;
    using System.Collections.Generic;
    using System.Collections;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class LibraryIterator : IEnumerator<Book>
    {
        private readonly List<Book> books;
        private int index;

        public LibraryIterator(List<Book> books)
        {
            this.books = books;
            this.index = -1;
        }

        public Book Current => this.books[index];

        object IEnumerator.Current => this.Current;

        public bool MoveNext()
        {
            index++;

            if (index >= this.books.Count)
            {
                return false;
            }

            return true;
        }

        public void Dispose() { }

        public void Reset() { }
    }
}
