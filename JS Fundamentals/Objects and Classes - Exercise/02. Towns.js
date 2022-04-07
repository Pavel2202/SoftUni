function solve(input) {
    let obj = {};

    for (let line of input) {
        let data = line.split(" | ");

        let town = data[0];
        let latitude = Number(data[1]);
        let longitude = Number(data[2]);

        obj.town = town;
        obj.latitude = latitude.toFixed(2);
        obj.longitude = longitude.toFixed(2);

        console.log(obj)
    }
}