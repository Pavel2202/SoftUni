function solve(first, second, operation) {
    let numOne = Number(first);
    let numTwo = Number(second);

    let result = 0;

    if (operation == '+') {
        result = numOne + numTwo;
    }
    else if (operation == '-') {
        result = numOne - numTwo;
    }
    else if (operation == '*') {
        result = numOne * numTwo;
    }
    else if (operation == '/') {
        result = numOne / numTwo;
    }
    else if (operation == '%') {
        result = numOne % numTwo;
    }
    else if (operation == '**') {
        result = numOne ** numTwo;
    }

    console.log(result);
}