class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus({value}) {
        return new Hex(this.value + value);
    }

    minus({value}) {
        return new Hex(this.value - value);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}