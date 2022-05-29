let expect = require('chai').expect;
const { assert } = require('chai');
let rentCar = require('./rentCar');

describe('Test', () => {
    describe('SearchCar should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => rentCar.searchCar('shop', 'car'), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(1, 'car'), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(true, 'car'), 'Invalid input!');
            assert.throw(() => rentCar.searchCar({}, 'car'), 'Invalid input!');

            assert.throw(() => rentCar.searchCar(['car1', 'car2'], 1), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(['car1', 'car2'], true), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(['car1', 'car2'], []), 'Invalid input!');
            assert.throw(() => rentCar.searchCar(['car1', 'car2'], {}), 'Invalid input!');
        })

        it('Should throw error when no car is found', () => {
            assert.throw(() => rentCar.searchCar(['BMW', 'Audi'], 'Mercedes'), 'There are no such models in the catalog!');
        })

        it('Should work', () => {
            expect(rentCar.searchCar(['BMW', 'Audi'], 'BMW')).to.eql('There is 1 car of model BMW in the catalog!');
        })
    })

    describe('CalculatePriceOfCar should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => rentCar.calculatePriceOfCar([], 1), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar({}, 1), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar(true, 1), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar(1, 1), 'Invalid input!');

            assert.throw(() => rentCar.calculatePriceOfCar('BMW', '1'), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', []), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', {}), 'Invalid input!');
            assert.throw(() => rentCar.calculatePriceOfCar('BMW', true), 'Invalid input!');
        })

        it('Should throw error when car is not in catalog', () => {
            assert.throw(() => rentCar.calculatePriceOfCar('Porsce', 7), 'No such model in the catalog!');
        })

        it('Should work', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');
        })
    })

    describe('CheckBudget should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => rentCar.checkBudget('1', 1, 1), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(true, 1, 1), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget([], 1, 1), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget({}, 1, 1), 'Invalid input!');

            assert.throw(() => rentCar.checkBudget(1, '1', 1), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(1, true, 1), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(1, [], 1), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(1, {}, 1), 'Invalid input!');

            assert.throw(() => rentCar.checkBudget(1, 1, '1'), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(1, 1, true), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(1, 1, []), 'Invalid input!');
            assert.throw(() => rentCar.checkBudget(1, 1, {}), 'Invalid input!');
        })

        it('Should return message when budget is not enough', () => {
            expect(rentCar.checkBudget(10, 2, 15)).to.equal('You need a bigger budget!');
        })

        it('Should return message when budget is enough', () => {
            expect(rentCar.checkBudget(10, 2, 20)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 2, 21)).to.equal('You rent a car!');
        })
    })
})