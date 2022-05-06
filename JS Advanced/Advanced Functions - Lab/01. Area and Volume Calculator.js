function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let json = JSON.parse(input);

    let result = [];

    for (let data of json) {
        let obj = {
            area: area.call(data),
            volume: vol.call(data)
        }

        result.push(obj);
    };

    return result;
}