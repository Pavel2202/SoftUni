const expect = require('chai').expect;
const { assert } = require('chai');
const bookSelection = require('./bookSelection');

describe('Test', () => {
    describe('Is Genre Suitable should work', () => {
        it('When genre is not for suitable should return message', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        })

        it('When genre is suitable should return message', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Criminal', 26)).to.equal(`Those books are suitable`);
        })
    })

    describe('Is It Affordable should work', () => {
        it('When input is not a number should throw error', () => {
            assert.throw(() => bookSelection.isItAffordable('1', 1), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable([], 1), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable({}, 1), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable(true, 1), "Invalid input");

            assert.throw(() => bookSelection.isItAffordable(1, '1'), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable(1, []), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable(1, {}), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable(1, false), "Invalid input");
        })

        it('Should return message when price is greater than budget', () => {
            expect(bookSelection.isItAffordable(100, 99)).to.equal("You don't have enough money");
        })

        it('Should return message when budget is equal to or greater than price', () => {
            expect(bookSelection.isItAffordable(100, 101)).to.equal(`Book bought. You have 1$ left`);
            expect(bookSelection.isItAffordable(100, 100)).to.equal(`Book bought. You have 0$ left`);
        })
    })

    describe('Suitable titles should work', () => {
        it('When input is invalid should throw error', () => {
            assert.throw(() => bookSelection.suitableTitles(1, 'Horror'), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles({}, 'Horror'), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles('array', 'Horror'), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles(true, 'Horror'), "Invalid input");

            assert.throw(() => bookSelection.suitableTitles([], 1), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles([], []), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles([], {}), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles([], true), "Invalid input");
        })

        it('When input is valid should return array', () => {
            let books = [];

            let bookOne = {
                title: 'BookOne',
                genre: 'Horror'
            };

            let bookTwo = {
                title: 'BookTwo',
                genre: 'Thriller'
            };

            books.push(bookOne);
            books.push(bookTwo);

            let expected = ['BookOne'];

            expect(bookSelection.suitableTitles(books, 'Horror')).to.eql(expected);
        })
    })
})