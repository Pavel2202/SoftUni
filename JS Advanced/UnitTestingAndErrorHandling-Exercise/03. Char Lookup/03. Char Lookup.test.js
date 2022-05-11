const expect = require('chai').expect;
const lookupChar = require('./03. Char Lookup');

describe('Check if index returns correct char of string', () => {
    it('Should return undefined when input string is not of string type', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
        expect(lookupChar(1, 1)).to.equal(undefined);
        expect(lookupChar(true, 1)).to.equal(undefined);
        expect(lookupChar({}, 1)).to.equal(undefined);
        expect(lookupChar([], 1)).to.equal(undefined);
    })

    it('Should return undefined when index is not number', () => {
        expect(lookupChar('string', '1')).to.equal(undefined);
        expect(lookupChar('string', 1.1)).to.equal(undefined);
        expect(lookupChar('string', true)).to.equal(undefined);
        expect(lookupChar('string', {})).to.equal(undefined);
        expect(lookupChar('string', [])).to.equal(undefined);
    })

    it('Should return undefined when both types arre invalid', () => {
        expect(lookupChar(1, '1')).to.equal(undefined);
    })

    it('Should return incorrect index when index is out of array', () => {
        expect(lookupChar('string', -1)).to.equal("Incorrect index");
        expect(lookupChar('string', 100)).to.equal("Incorrect index");
    })

    it('Should return char of string when everything is valid', () => {
        expect(lookupChar('word', 0)).to.equal('w');
        expect(lookupChar('word', 1)).to.equal('o');
        expect(lookupChar('word', 2)).to.equal('r');
        expect(lookupChar('word', 3)).to.equal('d');
    })
})