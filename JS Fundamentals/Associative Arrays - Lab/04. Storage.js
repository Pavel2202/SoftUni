function solve(input) {
    let storage = new Map();

    for (let line of input) {
        let data = line.split(" ");

        let product = data[0];
        let quantity = Number(data[1]);

        if (storage.has(product)) {
            let oldQuantity = storage.get(product);
            let currentQuantity = oldQuantity + quantity;

            storage.set(product, currentQuantity);
        }
        else {
            storage.set(product, quantity);
        }
    }

    for (let [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}