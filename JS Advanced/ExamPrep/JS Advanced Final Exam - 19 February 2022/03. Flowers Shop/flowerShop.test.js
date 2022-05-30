const expect = require('chai').expect;
const { assert } = require('chai');
const flowerShop = require('./flowerShop');

describe('Test', () => {
    describe('CalcPriceOfFlowers should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(1, 1, 1), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers(true, 1, 1), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers([], 1, 1), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers({}, 1, 1), 'Invalid input!');

            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', '1', 1), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', true, 1), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', [], 1), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', {}, 1), 'Invalid input!');

            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 1, '1'), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 1, true), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 1, []), 'Invalid input!');
            assert.throw(() => flowerShop.calcPriceOfFlowers('rose', 1, {}), 'Invalid input!');
        })

        it('Should return message when everything is valid', () => {
            expect(flowerShop.calcPriceOfFlowers('rose', 2, 5)).to.equal('You need $10.00 to buy rose!')
        })
    })

    describe('CheckFlowersAvailable should work', () => {
        it('Should return message when flower is not in garden', () => {
            expect(flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Orchid'])).to.equal('The Lily are sold! You need to purchase more!')
        })

        it('Should return message when flower is in garden', () => {
            expect(flowerShop.checkFlowersAvailable('Lily', ['Rose', 'Orchid', 'Lily'])).to.equal('The Lily are available!');
        })
    })

    describe('SellFlowers should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => flowerShop.sellFlowers(1, 1), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers('Rose', 1), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(true, 1), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers({}, 1), 'Invalid input!');

            assert.throw(() => flowerShop.sellFlowers(['Rose', 'Orchid', 'Lily'], '1'), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(['Rose', 'Orchid', 'Lily'], true), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(['Rose', 'Orchid', 'Lily'], []), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(['Rose', 'Orchid', 'Lily'], {}), 'Invalid input!');

            assert.throw(() => flowerShop.sellFlowers(['Rose', 'Orchid', 'Lily'], -1), 'Invalid input!');
            assert.throw(() => flowerShop.sellFlowers(['Rose', 'Orchid', 'Lily'], 4), 'Invalid input!');
        })

        it('Should return message when everything is valid', () => {
            expect(flowerShop.sellFlowers(['Rose', 'Orchid', 'Lily'], 1)).to.equal('Rose / Lily');
        })
    })
})