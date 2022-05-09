const expect = require('chai').expect;
const rgbToHexColor = require('./06. RGB to Hex');

describe('Check for valid colors', () => {
    it('Should return undefined when red is invalid', () => {
        expect(rgbToHexColor('1', 2, 3)).to.equal(undefined);
        expect(rgbToHexColor(-1, 2, 3)).to.equal(undefined);
        expect(rgbToHexColor(256, 2, 3)).to.equal(undefined);
    })

    it('Should return undefined when green is invalid', () => {
        expect(rgbToHexColor(1, [], 3)).to.equal(undefined);
        expect(rgbToHexColor(1, -2, 3)).to.equal(undefined);
        expect(rgbToHexColor(1, 256, 3)).to.equal(undefined);
    })

    it('Should return undefined when blue is invalid', () => {
        expect(rgbToHexColor(1, 2, {})).to.equal(undefined);
        expect(rgbToHexColor(1, 2, -3)).to.equal(undefined);
        expect(rgbToHexColor(1, 2, 256)).to.equal(undefined);
    })

    it('Should return string when all colors are valid', () => {
        let color = rgbToHexColor(10, 200, 33);
        let expectedColor = '#0AC821';

        let white = rgbToHexColor(255, 255, 255);
        let black = rgbToHexColor(0, 0, 0);

        expect(color).to.equal(expectedColor);
        expect(white).to.equal('#FFFFFF');
        expect(black).to.equal('#000000');
    })
})