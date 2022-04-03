function solve(input) {
    let k = input[0];
    let array = input.slice(1, input.length);

    let first = array.slice(0, k);
    let last = array.slice(array.length - k, array.length)

    console.log(first.join(" "));
    console.log(last.join(" "));
}