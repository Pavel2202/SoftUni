class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        let book = {
            bookName,
            bookAuthor,
            payed: false
        };

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        let book = this.books.find(x => x.bookName == bookName);

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        if (!this.books.some(x => x.bookName == bookName)) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        let book = this.books.find(x => x.bookName == bookName);

        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(this.books.indexOf(book), 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let output = '';

        if (arguments.length == 0) {
            output = `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;

            this.books.sort((a, b) => {
                return a.bookName.localeCompare(b.bookName);
            })
    
            for (const book of this.books) {
                output += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.\n`;
            }
        }
        else {
            let authorBooks = this.books.filter(x => x.bookAuthor == bookAuthor);

            if (authorBooks.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
    
            for (const book of authorBooks) {
                output += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.\n`;
            }
        }

        return output.trimEnd();
    }
}