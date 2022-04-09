function solve(words, text) {
    let splittedText = text.split(" ");
    let splittedWords = words.split(", ");

    let result = [];

    for (let i = 0; i < splittedText.length; i++) {
        let word = splittedText[i];

        if (word == "*".repeat(word.length)) {
            for (let replace of splittedWords) {
                if (replace.length == word.length) {
                    word = replace;
                }
            }
        }

        result.push(word);
    }

    console.log(result.join(" "));
}