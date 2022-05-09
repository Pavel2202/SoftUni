const expect = require('chai').expect;
const sum = require('./04. Sum of Numbers');

describe('Should return sum of array numbers.', () => {
    it('sum of array', () => {
        let actual = sum([1, 2, 3]);
        let expected = 6;

        expect(actual).to.equal(expected);
    })
})