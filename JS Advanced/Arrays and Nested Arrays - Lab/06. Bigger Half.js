function solve(input) {
    input = input.sort((a, b) => {
        return a - b;
    })

    let index = Math.floor(input.length / 2);

    let result = [];

    for (let i = index; i < input.length; i++) {
        result.push(input[i]);
    }

    return result;
}