function solve(input) {
    let result = [];
    result.push(input[0]);
    let index = 0;

    for (let letter of input) {
        if (result[index] != letter) {
            result.push(letter);
            index++;
        }
    }

    console.log(result.join(""));
}