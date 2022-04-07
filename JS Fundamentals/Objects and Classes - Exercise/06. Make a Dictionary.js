function solve(input) {
    class Word {
        constructor(term, definition) {
            this.term = term;
            this.definition = definition;
        }
    }

    let dictionary = [];

    for (let line of input) {
        let json = JSON.parse(line);
        let data = Object.entries(json);

        let term;
        let definition;

        for (let [key, value] of data) {
            term = key,
            definition = value;
        }

        if (dictionary.filter(t => t.term == term).length > 0) {
            let index = dictionary.findIndex(t => t.term == term);
            dictionary[index].definition = definition;
        }
        else {
            let word = new Word(term, definition);
            dictionary.push(word);
        }
    }

    dictionary.sort((a, b) => {
        termA = a.term.toString();
        termB = b.term.toString();

        return termA.localeCompare(termB);
    })

    for (let word of dictionary) {
        console.log(`Term: ${word.term} => Definition: ${word.definition}`);
    }
}