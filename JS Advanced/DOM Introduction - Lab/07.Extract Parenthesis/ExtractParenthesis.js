function extract(content) {
    let input = document.getElementById(content).textContent;
    let pattern = /\([A-Za-z ]+\)/g;

    let result = [];

    let matches = input.match(pattern);

    for (let match of matches) {
        match = match.slice(1, match.length - 1);

        result.push(match);
    }

    return result.join('; ');
}