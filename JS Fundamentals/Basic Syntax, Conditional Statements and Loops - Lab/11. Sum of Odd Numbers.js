function solve(n) {
    let sum = 0;
    let oddCount = 0;
    let number = 1;

    while (oddCount < n) {
        if (number % 2 != 0) {
            console.log(number);
            oddCount++;
            sum += number;
        }

        number++;
    }

    console.log(`Sum: ${sum}`);
}