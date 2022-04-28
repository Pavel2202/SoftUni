function calc() {
    let firstNumber = Number(document.querySelector('#num1').value);
    let secondNumber = Number(document.querySelector('#num2').value);
    let sum = document.querySelector('#sum');

    sum.value = firstNumber + secondNumber;
}
