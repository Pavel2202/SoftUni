function solve(input) {
    let arr = [];

    for (let i = 0; i < input.length / 2; i++) {
        let temp = input[i];
        arr[i] = input[input.length - 1 - i];
        arr[input.length - 1 - i] = temp;
    }

    console.log(arr.join(" "));
}