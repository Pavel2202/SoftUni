function solve(word, text) {
    let wordToLower = word.toLowerCase();

    let data = text.split(" ");

    for (let textWord of data) {
        textWord = textWord.toLowerCase();

        if (wordToLower == textWord) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`)
}