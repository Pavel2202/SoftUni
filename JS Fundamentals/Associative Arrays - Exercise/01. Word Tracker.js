function solve(input) {
    let assocArray = {};

    let array = input[0];
    let text = input.slice(1, input.length);

    let searchWords = array.split(" ");

    for (let search of searchWords) {
        let count = 0;

        for (let word of text) {
            if (search == word) {
                count++;
            }
        }

        assocArray[search] = count;
    }

    let entries = Object.entries(assocArray);

    entries.sort((a, b) => {
        return b[1] - a[1];
    })

    for (let [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
}