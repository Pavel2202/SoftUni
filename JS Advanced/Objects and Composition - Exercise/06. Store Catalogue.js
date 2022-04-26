function solve(input) {
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    let letters = new Set();
    let products = [];

    for (let line of input) {
        let data = line.split(" : ");

        let productName = data[0];
        let price = Number(data[1]);

        let product = new Product(productName, price);

        products.push(product);
        letters.add(productName[0]);
    }

    products.sort((a, b) => {
        let productAName = a.name.toLowerCase();
        let productBName = b.name.toLowerCase();

        return productAName.localeCompare(productBName);
    });

    let sortedLetters = Array.from(letters);

    sortedLetters.sort((a, b) => {
        return a.localeCompare(b);
    })

    for (let letter of sortedLetters) {
        console.log(letter.toUpperCase());
        let productsWithLetter = products.filter(p => p.name[0] == letter);

        for (let product of productsWithLetter) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}