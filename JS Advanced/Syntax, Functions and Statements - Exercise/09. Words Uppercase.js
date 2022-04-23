function solve(input) {
    let words = input
    .toUpperCase()
    .match(/\w+/g);

    console.log(words.join(", "));
}