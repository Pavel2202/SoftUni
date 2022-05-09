function solve(numbers, startIndex, endIndex) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > numbers.length - 1) {
        endIndex = numbers.length - 1;
    }

    numbers = numbers.slice(startIndex, endIndex + 1);

    return numbers.reduce((acc, num) => 
        acc + Number(num), 0);
}