const expect = require('chai').expect;
const isOddOrEven = require('./02. Even Or Odd');

describe('Check if length of a string is odd or even', () => {
    it('Should return undefined when input is not string', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
        expect(isOddOrEven(true)).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
        expect(isOddOrEven([])).to.equal(undefined);
    })

    it('Should return even when length is even', () => {
        let actual = isOddOrEven('evenWord');
        let expected = 'even';

        expect(actual).to.equal(expected);
    })

    it('Should return odd when length is odd', () => {
        let actual = isOddOrEven('notEvenWord');
        let expected = 'odd';

        expect(actual).to.equal(expected);
    })
})