function calculator() {
    let firstNumber = 0;
    let secondNumber = 0;
    let result = 0;

    return {
        init: (firstSelector, secondSelector, resultSelector) => {
            firstNumber = document.querySelector(firstSelector);
            secondNumber = document.querySelector(secondSelector);
            result = document.querySelector(resultSelector);
        },
        add: () => {
            result.value = Number(firstNumber.value) + Number(secondNumber.value);
        },
        subtract: () => {
            result.value = Number(firstNumber.value) - Number(secondNumber.value);
        }
    }
}