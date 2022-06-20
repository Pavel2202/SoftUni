const { assert } = require('chai');
const cinema = require('./cinema.js');
const expect = require('chai').expect;

describe('Test', () => {
    describe('Show Movies should work', () => {
        it('Should return message when array is empty', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        })

        it('Should return joined movies', () => {
            expect(cinema.showMovies(['One', 'Two'])).to.equal('One, Two');
            expect(cinema.showMovies(['One', 'Two', 'Three'])).to.equal('One, Two, Three');
        })
    })

    describe('Ticket Price should work', () => {
        it('Should return price', () => {
            expect(cinema.ticketPrice("Premiere")).to.equal(12);
            expect(cinema.ticketPrice("Normal")).to.equal(7.5);
            expect(cinema.ticketPrice("Discount")).to.equal(5.5);
        })

        it('Should throw error when type is not in schedule', () => {
            assert.throw(() => cinema.ticketPrice("None"), 'Invalid projection type.');
            assert.throw(() => cinema.ticketPrice(1), 'Invalid projection type.');
            assert.throw(() => cinema.ticketPrice([]), 'Invalid projection type.');
            assert.throw(() => cinema.ticketPrice({}), 'Invalid projection type.');
            assert.throw(() => cinema.ticketPrice(true), 'Invalid projection type.');

        })
    })

    describe('Swap Seats should work', () => {
        it('Should return message when input is invalid', () => {
            expect(cinema.swapSeatsInHall('text', 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(true, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall([], 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall({}, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1.1, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-5, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(12)).to.equal("Unsuccessful change of seats in the hall.");

            expect(cinema.swapSeatsInHall(1, 'text')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, true)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, [])).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, {})).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 5.2)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, -5)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 21)).to.equal("Unsuccessful change of seats in the hall.");

            expect(cinema.swapSeatsInHall(1, 1)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 5)).to.equal("Unsuccessful change of seats in the hall.");
        })

        it('Should return message when input is valid', () => {
            expect(cinema.swapSeatsInHall(5, 6)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(12, 6)).to.equal("Successful change of seats in the hall.");
        })
    })
})