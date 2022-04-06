function solve(numbers, bombNumbers) {
    let search = bombNumbers[0];
    let power = bombNumbers[1];
    let sum = 0;
    
    while (numbers.includes(search)) {
        let index = numbers.indexOf(search);
        let elementsToRemove = power * 2 + 1;
        let startIndex = index - power;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }

        numbers.splice(startIndex, elementsToRemove);
    }

    for (let num of numbers) {
        sum += num;
    }
    
    console.log(sum);
}