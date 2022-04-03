function solve(array) {
    let oddIndices = array.filter(x => array.indexOf(x) % 2 != 0);

    let result = oddIndices.map(x => x * 2);

    result = result.reverse();

    console.log(result.join(" "));
}