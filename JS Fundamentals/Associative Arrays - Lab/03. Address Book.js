function solve(input) {
    let addressBook = {};

    for (let line of input) {
        let data = line.split(":");

        let name = data[0];
        let address = data[1];

        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook);

    sorted.sort((a, b) => {
        keyA = a[0];
        keyB = b[0];

        return keyA.localeCompare(keyB);
    });

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value}`);
    }
}