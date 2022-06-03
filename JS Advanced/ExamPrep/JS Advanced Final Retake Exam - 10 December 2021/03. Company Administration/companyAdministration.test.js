const expect = require('chai').expect;
const { assert } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('Test', () => {
    describe('HiringEmployee should work', () => {
        it('Should throw error when position is not Programmer', () => {
            assert.throw(() => companyAdministration.hiringEmployee('Pesho', 'HR', 5), `We are not looking for workers for this position.`);
        })

        it('Should return message when yearsExperience is lower than 3', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2)).to.equal(`Pesho is not approved for this position.`);
        })

        it('Should return message when yearsExperience is higher than or equal to 3', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.equal(`Pesho was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 4)).to.equal(`Pesho was successfully hired for the position Programmer.`);
        })
    })

    describe('CalculateSalary should work', () => {
        it('Should throw error when hours are negative or NaN', () => {
            assert.throw(() => companyAdministration.calculateSalary(-1), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary('1'), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary(true), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary([]), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary({}), "Invalid hours");
        })

        it('Should return totalSalary', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        })
    })

    describe('FiredEmployee should work', () => {
        it('Should throw error when input is invalid', () => {
            assert.throw(() => companyAdministration.firedEmployee('string', 1), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(1, 1), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(true, 1), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee({}, 1), "Invalid input");

            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], '1'), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], true), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], []), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], {}), "Invalid input");

            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], -1), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], 2), "Invalid input");
        })

        it('Should return joined employees', () => {
            expect(companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Misho'], 1)).to.equal('Pesho, Misho');
        })
    })
})