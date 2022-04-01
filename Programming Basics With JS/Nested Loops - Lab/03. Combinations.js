function solve(input) {
    let number = Number(input[0]);
    let successCount = 0;

    for (let first = 0; first <= number; first++) {
        for (let second = 0; second <= number; second++) {
            for (let third = 0; third <= number; third++) {
                if (first + second + third === number) {
                    successCount++;
                }
            }
        }
    }

    console.log(successCount);
}