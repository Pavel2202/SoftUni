const { assert } = require('chai');
const { Repository } = require('./solution.js');;
const expect = require('chai').expect;

describe('Test', () => {
    let instance = {};

    let validEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let anotherValidEntity = {
        name: 'Gosho',
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let invalidEntity = {
        name1: 'Stamat',
        age: 29,
        birthday: new Date(1991, 0, 21)
    };

    let invalidTypeEntity = {
        name: 'Stamat',
        age: 29,
        birthday: 1991
    };

    beforeEach(() => instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object'
    }))

    it('Count getter should return length of Map', () => {
        expect(instance.count).to.equal(0);

        instance.add(validEntity);

        expect(instance.count).to.equal(1);
    })

    it('Validate should throw error when entity or property type is invalid', () => {
        assert.throw(() => instance.add(invalidEntity), `Property name is missing from the entity!`);

        assert.throw(() => instance.add(invalidTypeEntity), `Property birthday is not of correct type!`);

        instance.add(validEntity);

        assert.throw(() => instance.update(0, invalidEntity), `Property name is missing from the entity!`);

        assert.throw(() => instance.update(0, invalidTypeEntity), `Property birthday is not of correct type!`);

        expect(() => instance.add(invalidEntity).to.throw(`Property name is missing from the entity!`));
        expect(() => instance.add(invalidTypeEntity).to.throw(TypeError));
        expect(() => instance.update(0, invalidTypeEntity).to.throw(TypeError));
    })

    it('Add should return id when input is valid', () => {
        expect(instance.add(validEntity)).to.equal(0);
    })

    it('GetId should throw error when id is not present', () => {
        assert.throw(() => instance.getId(5), `Entity with id: 5 does not exist!`);
    })

    it('GetId should work', () => {
        instance.add(validEntity);

        expect(instance.getId(0)).to.equal(validEntity);
    })

    it('Update should throw error when id is not present', () => {
        assert.throw(() => instance.update(5, anotherValidEntity), `Entity with id: 5 does not exist!`);
    })

    it('Update should work', () => {
        instance.add(validEntity);

        instance.update(0, anotherValidEntity);

        expect(instance.getId(0)).to.equal(anotherValidEntity);
    })

    it('Delete should throw error when id is not present', () => {
        assert.throw(() => instance.del(5), `Entity with id: 5 does not exist!`);
    })

    it('Delete should work', () => {
        instance.add(validEntity);

        instance.del(0);

        expect(instance.count).to.equal(0);
        expect(instance.data.has(0)).to.equal(false);
    })
})