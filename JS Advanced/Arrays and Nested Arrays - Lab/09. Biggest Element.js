function solve(input) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row of input) {
        for (let number of row) {
            if (number > biggest) {
                biggest = number;
            }
        }
    }

    return biggest;
}