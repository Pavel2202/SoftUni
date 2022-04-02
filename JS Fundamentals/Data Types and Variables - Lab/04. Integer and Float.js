function solve(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    console.log(`${sum} - ${sum % 1 == 0 ? "Integer" : "Float"}`);
}