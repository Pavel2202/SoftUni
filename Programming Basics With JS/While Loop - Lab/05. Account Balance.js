function solve(input) {
    let index = 0;
    let current = input[index];
    let sum = 0;

    while(current != "NoMoreMoney") {
        current = Number(current);

        if (current < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        sum += current;
        console.log(`Increase: ${current.toFixed(2)}`);

        index++;
        current = input[index];
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}