function solve(flavors, first, last) {
    let result = [];

    let startIndex = flavors.indexOf(first);
    let endIndex = flavors.indexOf(last);

    for (let i = startIndex; i <= endIndex; i++) {
        result.push(flavors[i]);
    }

    return result;
}