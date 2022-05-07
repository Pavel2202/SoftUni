function solve(...input) {
    let types = {};

    input.forEach(x => {
        let type = typeof(x);

        if (types[type] >= 1) {
            types[type]++;
        }
        else {
            types[type] = 1;
         }

        console.log(`${type}: ${x}`);
    });

    let arrayTypes = Object.entries(types);

    arrayTypes.sort((a, b) => {
        return b[1] - a[1];
    });

    arrayTypes.forEach(x => {
        console.log(`${x[0]} = ${x[1]}`);
    });
}