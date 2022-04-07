function solve(stock, orders) {
    class Product {
        constructor (name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
    }

    let products = [];

    for (let i = 0; i < stock.length; i+=2) {
        let name = stock[i];
        let quantity = Number(stock[i + 1]);

        let product = new Product(name, quantity);

        products.push(product);
    }

    for (let i = 0; i < orders.length; i+=2) {
        let name = orders[i];
        let quantity = Number(orders[i + 1]);

        if (products.filter(p => p.name == name).length > 0) {
            let index = products.findIndex(p => p.name == name);

            products[index].quantity += quantity;
        }
        else {
            let product = new Product(name, quantity);

            products.push(product); 
        }
    }

    for (let product of products) {
        console.log(`${product.name} -> ${product.quantity}`);
    }
}