function solve(input) {
    class Product {
        constructor(name, price, town) {
            this.name = name;
            this.price = price;
            this.town = town;
        }
    }

    let products = [];

    for (let line of input) {
        let data = line.split(" | ");

        let town = data[0];
        let productName = data[1];
        let price = Number(data[2]);

        let product = new Product(productName, price, town);

        if (products.some(p => p.name == productName)) {
            let addedProductIndex = products.findIndex(p => p.name == productName);
            let addedProduct = products[addedProductIndex];

            if (product.price < addedProduct.price) {
                products.splice(addedProductIndex, 1, product);
            }
        }
        else {
            products.push(product);
        }
    }

    for (let product of products) {
        console.log(`${product.name} -> ${product.price} (${product.town})`);
    }
}