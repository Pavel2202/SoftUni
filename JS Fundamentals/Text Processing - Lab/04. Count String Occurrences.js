function solve(text, word) {
    let count = 0;

    let splited = text.split(" ");

    let result = splited.filter(w => w == word).length;

    console.log(result);
}