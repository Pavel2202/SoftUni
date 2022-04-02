function solve(n, input) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = input[i];
    }

    arr.reverse();

    console.log(arr.join(" "));
}