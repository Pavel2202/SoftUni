namespace _04._BookComparer
{
    using System;
    using System.Collections.Generic;
    using System.Collections;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Library : IEnumerable<Book>
    {
        private SortedSet<Book> books;
        private BookComparator comparator;

        public Library(params Book[] books)
        {
            this.comparator = new BookComparator();
            this.books = new SortedSet<Book>(books, comparator);
        }

        public IEnumerator<Book> GetEnumerator()
        {
            return new LibraryIterator(this.books.ToList());
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}
