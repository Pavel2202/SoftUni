function solve(input) {
    let array = [];

    for (let number of input) {
        if (array.includes(number)) {
            continue;
        }

        array.push(number);
    }

    console.log(array.join(" "));
}