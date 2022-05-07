function getFibonator() {
    let firstNum = 0;
    let secondNum = 1;

    return function fib() {
        let result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;

        return firstNum;
    }
}