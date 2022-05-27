const expect = require('chai').expect;
const dealership = require('./dealership');

describe('Test', () => {
    describe('NewCarCost should work', () => {
        it('Should work with old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
        })

        it('Should work with car that is not with discount', () => {
            expect(dealership.newCarCost('BMW M5 Competition', 100000)).to.equal(100000);
        })
    })

    describe('CarEquipment test', () => {
        it('CarEquipment should work', () => {
            expect(dealership.carEquipment(['navigation', 'heated seats'], [0])).to.eql(['navigation']);
            expect(dealership.carEquipment(['navigation', 'heated seats'], [0, 1])).to.eql(['navigation', 'heated seats']);
        })
    })

    describe('Euro category test', () => {
        it('Euro category should work with category below 4', () => {
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!');
        })

        it('Euro category should work with category over or equal to 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        })
    })
})