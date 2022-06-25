const { assert } = require('chai');
const carService = require('./carService.js');
const expect = require('chai').expect;

describe('Test', () => {
    describe('IsItExpensive test', () => {
        it('Should return message when issue is Engine or Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        })

        it('Should return message when issue is different', () => {
            expect(carService.isItExpensive('Door Dent')).to.equal(`The overall price will be a bit cheaper`);
        })
    })

    describe('Discount test', () => {
        it('Should throw error when input types are not numbers', () => {
            assert.throw(() => carService.discount('1', 1), "Invalid input");
            assert.throw(() => carService.discount(true, 1), "Invalid input");
            assert.throw(() => carService.discount([], 1), "Invalid input");
            assert.throw(() => carService.discount({}, 1), "Invalid input");

            assert.throw(() => carService.discount(1, '1'), "Invalid input");
            assert.throw(() => carService.discount(1, true), "Invalid input");
            assert.throw(() => carService.discount(1, []), "Invalid input");
            assert.throw(() => carService.discount(1, {}), "Invalid input");
        })

        it('Should receive no discount when parts are equal to or less than 2', () => {
            expect(carService.discount(1, 50)).to.equal("You cannot apply a discount");
            expect(carService.discount(2, 50)).to.equal("You cannot apply a discount");
        })

        it('Should receive discount when parts are more than 2', () => {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`);
        })
    })

    describe('PartsToBuy test', () => {
        it('Should throw error when input types are not arrays', () => {
            assert.throw(() => carService.partsToBuy(1, []), "Invalid input");
            assert.throw(() => carService.partsToBuy(true, []), "Invalid input");
            assert.throw(() => carService.partsToBuy('1', []), "Invalid input");
            assert.throw(() => carService.partsToBuy({}, []), "Invalid input");

            assert.throw(() => carService.partsToBuy([], 1), "Invalid input");
            assert.throw(() => carService.partsToBuy([], '1'), "Invalid input");
            assert.throw(() => carService.partsToBuy([], true), "Invalid input");
            assert.throw(() => carService.partsToBuy([], {}), "Invalid input");
        })

        it('Should return total sum of parts', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ['blowoff valve'])).to.equal(145);
            expect(carService.partsToBuy([], ['blowoff valve'])).to.equal(0);
        })
    })
})