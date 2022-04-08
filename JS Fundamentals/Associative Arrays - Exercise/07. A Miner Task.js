function solve(input) {
    let assocArray = {};

    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (assocArray.hasOwnProperty(resource)) {
            assocArray[resource] += quantity;
        }
        else {
            assocArray[resource] = quantity;
        }
    }

    let entries = Object.entries(assocArray);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}