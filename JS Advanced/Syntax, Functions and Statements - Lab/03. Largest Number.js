function solve(first, second, third) {
    let max = first;

    if (second > max) {
        max = second;
    }

    if (third > max) {
        max = third;
    }

    console.log(`The largest number is ${max}.`);
}