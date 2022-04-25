function solve(array) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let result = [];

    for (let number of array) {
        if (number >= biggest) {
            result.push(number);
            biggest = number;
        }
    }

    return result;
}