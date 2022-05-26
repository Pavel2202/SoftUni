const expect = require('chai').expect;
const { assert } = require('chai');
const numberOperations = require('./03.NumberOperations');

describe('Operations should work', () => {
    describe('PowNumber should work', () => {
        it('Should return powered positive number from positive number input', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        })

        it('Should return powered positive number from negative number input', () => {
            expect(numberOperations.powNumber(-2)).to.equal(4);
        })

        it('Should return 0 from 0 input', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        })
    })

    describe('NumberChecker should work', () => {
        it('Should throw error when input is not number', () => {
            assert.throw(() => numberOperations.numberChecker('true'), 'The input is not a number!')
        })

        it('Should work with numbers when is inputed as string', () => {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
        })

        it('Should work with numbers lower than 100', () => {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
        })

        it('Should work with numbers bigger than or equal to 100', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        })
    })

    describe('SumArrays should work', () => {
        it('Should work with arrays with same length', () => {
            let arr1 = [1, 2, 3];
            let arr2 = [4, 5, 6];

            let expected = [5, 7, 9];

            expect(numberOperations.sumArrays(arr1, arr2)).to.eql(expected);
        })

        it('Should work when first array has bigger length', () => {
            let arr1 = [1, 2, 3, 10];
            let arr2 = [4, 5, 6];

            let expected = [5, 7, 9, 10];

            expect(numberOperations.sumArrays(arr1, arr2)).to.eql(expected);
        })

        it('Should work when second array has bigger length', () => {
            let arr1 = [1, 2, 3];
            let arr2 = [4, 5, 6, 10];

            let expected = [5, 7, 9, 10];

            expect(numberOperations.sumArrays(arr1, arr2)).to.eql(expected);
        })
    })
})