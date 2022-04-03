function solve(firstNum, secondNum, operator) {
    let result = 0;

    if (operator == "add") {
        result = firstNum + secondNum;
    }
    else if (operator == "subtract") {
        result = firstNum - secondNum;
    }
    else if (operator == "multiply") {
        result = firstNum * secondNum;
    }
    else if (operator == "divide") {
        result = firstNum / secondNum;
    }

    console.log(result);
}