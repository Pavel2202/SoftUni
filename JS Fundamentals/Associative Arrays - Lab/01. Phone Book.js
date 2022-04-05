function solve(input) {
    let phoneBook = {};

    for (let line of input) {
        let data = line.split(" ");

        let name = data[0];
        let number = data[1];
        phoneBook[name] = number;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}