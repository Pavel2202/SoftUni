function solve(input) {
    input = input.sort((a, b) => {
        return a - b;
    })

    console.log(`${input[0]} - ${input[1]}`);
}