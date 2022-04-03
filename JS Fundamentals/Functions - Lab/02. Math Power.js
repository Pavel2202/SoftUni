function solve(num, pow) {
    let result = 1;

    for (let i = 0; i < pow; i++) {
        result *= num;
    }

    console.log(result)
}