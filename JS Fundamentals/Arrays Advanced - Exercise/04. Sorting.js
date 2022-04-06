function solve(input) {
    let array = input.slice(0);

    let sorted = array.sort((a, b) => {
        return b - a;
    })

    let result = [];

    while (sorted.length > 0) {
        result.push(array.shift());

        result.push(array.pop());
    }

    console.log(result.join(" "));
}