function solve(n, k) {
    let result = [];
    result[0] = 1;

    for (let i = 1; i < n; i++) {
        let num = 0;

        if (result.length < k) {
            for (let j = 0; j < result.length; j++) {
                num += result[j];
            }
        }
        else {
            for (let j = i - k; j < (i - k) + k; j++) {
                num += result[j];
            }
        }

        result[i] = num;
    }

    return result;
}