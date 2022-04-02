function solve(firstArray, secondArray) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        let firstNum = Number(firstArray[i]);
        let secondNum = Number(secondArray[i]);

        if (firstNum == secondNum) {
            sum += firstNum;
        }
        else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}