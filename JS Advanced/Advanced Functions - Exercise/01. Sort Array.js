function solve(numbers, order) {
    if (order == 'asc') {
        numbers.sort((a, b) => {
            return a - b;
        })
    }
    else {
        numbers.sort((a, b) => {
            return b - a;
        })
    }

    return numbers;
}