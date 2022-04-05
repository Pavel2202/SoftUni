function solve(input) {
    let map = new Map();

    for (let word of input) {
        if (map.has(word)) {
            let currentOccurences = map.get(word);

            let occurences = currentOccurences + 1;

            map.set(word, occurences++);
        }
        else {
            map.set(word, 1);
        }
    }

    let sorted = Array.from(map);

    sorted.sort(sortOccurences);

    function sortOccurences(a, b) {
        let valueA = a[1];
        let valueB = b[1];

        return valueB - valueA;
    }

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}