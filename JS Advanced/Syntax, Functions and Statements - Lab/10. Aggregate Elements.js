function solve(input) {
    let sum = 0;
    let inverseSum = 0;
    let concatResult = "";

    for (let current of input) {
        let number = Number(current);

        sum += number;
        inverseSum += 1 / number;
        concatResult += current;
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatResult);
}