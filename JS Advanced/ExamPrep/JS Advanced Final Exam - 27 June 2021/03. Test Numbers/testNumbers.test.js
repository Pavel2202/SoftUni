const { assert } = require('chai');
const testNumbers = require('./testNumbers.js');
const expect = require('chai').expect;

describe('Test', () => {
    describe('SumNumbers should work', () => {
        it('Should return undefined when input is invalid', () => {
            expect(testNumbers.sumNumbers('1', 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers(true, 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers([], 1)).to.equal(undefined);
            expect(testNumbers.sumNumbers({}, 1)).to.equal(undefined);

            expect(testNumbers.sumNumbers(1, '1')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, true)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, [])).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, {})).to.equal(undefined);
        })

        it('Should work', () => {
            expect(testNumbers.sumNumbers(5, 10)).to.equal('15.00');
            expect(testNumbers.sumNumbers(5, 0)).to.equal('5.00');
            expect(testNumbers.sumNumbers(5, -10)).to.equal('-5.00');
        })
    })

    describe('NumberChecker should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => testNumbers.numberChecker('text'), 'The input is not a number!');
            assert.throw(() => testNumbers.numberChecker({}), 'The input is not a number!');
        })

        it('Should work', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
        })
    })

    describe('AverageSumArray should work', () => {
        it('Should work', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        })
    })
})