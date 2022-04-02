function solve(word, symbol, match) {
    word = word.replace('_', symbol);

    if (word == match) {
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);
    }
}