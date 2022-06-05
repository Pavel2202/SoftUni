const { assert } = require('chai');
const library = require('./library');
const expect = require('chai').expect;

describe('Test', () => {
    describe('CalcPriceOfBook should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => library.calcPriceOfBook(1, 2000), "Invalid input");
            assert.throw(() => library.calcPriceOfBook(true, 2000), "Invalid input");
            assert.throw(() => library.calcPriceOfBook([], 2000), "Invalid input");
            assert.throw(() => library.calcPriceOfBook({}, 2000), "Invalid input");

            assert.throw(() => library.calcPriceOfBook('Book', '2000'), "Invalid input");
            assert.throw(() => library.calcPriceOfBook('Book', true), "Invalid input");
            assert.throw(() => library.calcPriceOfBook('Book', []), "Invalid input");
            assert.throw(() => library.calcPriceOfBook('Book', {}), "Invalid input");
        })

        it('Should work', () => {
            expect(library.calcPriceOfBook('Book', 2000)).to.equal(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook('Book', 1980)).to.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 1979)).to.equal(`Price of Book is 10.00`);
        })
    })

    describe('FindBook should work', () => {
        it('Should throw error when array is empty', () => {
            assert.throw(() => library.findBook([], 'Book'), "No books currently available");
        })

        it('Should return message when book is not in array', () => {
            expect(library.findBook(['Book'], 'NotBook')).to.equal("The book you are looking for is not here!");
        })

        it('Should return message when book is in array', () => {
            expect(library.findBook(['Book'], 'Book')).to.equal("We found the book you want.");
        })
    })

    describe('ArrangeTheBooks should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => library.arrangeTheBooks([]), "Invalid input");
            assert.throw(() => library.arrangeTheBooks({}), "Invalid input");
            assert.throw(() => library.arrangeTheBooks(true), "Invalid input");
            assert.throw(() => library.arrangeTheBooks('1'), "Invalid input");
            assert.throw(() => library.arrangeTheBooks(-5), "Invalid input");
        })

        it('Should return message when there is no space', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        })

        it('Should return message when there is enough space', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.");
        })
    })
})