function solve(array) {
    array.sort((a, b) => {
        return a - b;
    })

    let result = [];

    while (array.length > 0) {
        let small = array.shift();
        let big = array.pop();

        result.push(small);
        result.push(big);
    }   

    return result;
}