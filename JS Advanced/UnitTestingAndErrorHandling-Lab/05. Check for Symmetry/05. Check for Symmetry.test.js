const expect = require('chai').expect;
const isSymmetric = require('./05. Check for Symmetry');

describe('Check for symetric array', () => {
    it('Should return false when input is not array', () => {
        let actual = isSymmetric(1);
        let expected = false;

        expect(actual).to.equal(expected);
    })

    it('Should return false when array is not symetrical', () => {
        let actual = isSymmetric([1, 2, 3, 4, 5]);
        let expected = false;

        expect(actual).to.equal(expected);
    })

    it('Should return false when array elements are not from the same type', () => {
        let actual = isSymmetric([1, '1']);
        let expected = false;

        expect(actual).to.equal(expected);
    })

    it('Should return true when array is symetrical', () => {
        let actual = isSymmetric([1, 2, 3, 3, 2, 1]);
        let expected = true;

        expect(actual).to.equal(expected);
    })

    it('Should return true when array is symetrical', () => {
        let actual = isSymmetric(['a', 'b', 'b', 'a']);
        let expected = true;

        expect(actual).to.equal(expected);
    })
})