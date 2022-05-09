const expect = require('chai').expect;
const createCalculator = require('./07. AddSubtract');

describe('Calculator should work', () => {
    it('Add should work', () => {
        let calculator = createCalculator();
        calculator.add(2);

        let actual = calculator.get();
        let expected = 2;

        expect(actual).to.equal(expected);
    })

    it('Add should work', () => {
        let calculator = createCalculator();
        calculator.add(2);
        calculator.add(2);

        let actual = calculator.get();
        let expected = 4;

        expect(actual).to.equal(expected);
    })

    it('Add should work', () => {
        let calculator = createCalculator();
        calculator.add('2');
        calculator.add(2);

        let actual = calculator.get();
        let expected = 4;

        expect(actual).to.equal(expected);
    })

    it('Subtract should work', () => {
        let calculator = createCalculator();
        calculator.subtract(2);

        let actual = calculator.get();
        let expected = -2;

        expect(actual).to.equal(expected);
    })

    it('Subtract should work', () => {
        let calculator = createCalculator();
        calculator.subtract(2);
        calculator.subtract(2);
        
        let actual = calculator.get();
        let expected = -4;

        expect(actual).to.equal(expected);
    })

    it('Subtract should work', () => {
        let calculator = createCalculator();
        calculator.subtract('2');
        calculator.subtract(2);
        
        let actual = calculator.get();
        let expected = -4;

        expect(actual).to.equal(expected);
    })
})