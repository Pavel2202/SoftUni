function solve(input) {
    let n = Number(input[0]);

    let current = 1;
    console.log(current);

    while(current * 2 + 1 <= n) {
        current = current * 2 + 1;

        console.log(current);
    }
}