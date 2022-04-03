function solve(array) {
    let sorted = array.sort((a,b) => {
        return a - b;
    })

    let result = array.slice(0, 2);

    console.log(result.join(" "));
}