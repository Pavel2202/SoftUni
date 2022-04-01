function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let goal = Number(input[2]);
    let combinationsCount = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationsCount++;

            if (i + j === goal) {
                console.log(`Combination N:${combinationsCount} (${i} + ${j} = ${goal})`);
                return;
            }
        }
    }

    console.log(`${combinationsCount} combinations - neither equals ${goal}`);
}