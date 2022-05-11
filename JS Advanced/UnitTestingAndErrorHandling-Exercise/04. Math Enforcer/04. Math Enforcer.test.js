const expect = require('chai').expect;
const mathEnforcer = require('./04. Math Enforcer');

describe('add five function', () => {
    it('Should return undefined when input is not of number type', () => {
        expect(mathEnforcer.addFive('1')).to.equal(undefined);
        expect(mathEnforcer.addFive(true)).to.equal(undefined);
        expect(mathEnforcer.addFive({})).to.equal(undefined);
        expect(mathEnforcer.addFive([])).to.equal(undefined);
    })

    it('Add should work', () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
    })
})

describe('subtract ten function', () => {
    it('Should return undefined when input is not of number type', () => {
        expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
        expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
        expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        expect(mathEnforcer.subtractTen([])).to.equal(undefined);
    })

    it('Subtract should work', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
    })
})

describe('Sum function', () => {
    it('Should return undefined when one of the numbers is not of number type', () => {
        expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
        expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
        expect(mathEnforcer.sum('1', '1')).to.equal(undefined);
    })

    it('Sum should work', () => {
        expect(mathEnforcer.sum(1, 1)).to.equal(2);
        expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        expect(mathEnforcer.sum(1.1, 1)).to.be.closeTo(2.1, 0.01);
        expect(mathEnforcer.sum(1, 1.1)).to.be.closeTo(2.1, 0.01);
        expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.01);
    })
})