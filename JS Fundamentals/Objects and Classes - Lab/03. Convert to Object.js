function solve(input) {
    let obj = JSON.parse(input);

    let entries = Object.entries(obj);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}