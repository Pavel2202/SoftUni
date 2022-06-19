class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const product of products) {
            let data = product.split(' ');

            let name = data[0];
            let quantity = Number(data[1]);
            let price = Number(data[2]);

            if (this.budgetMoney >= price) {
                this.budgetMoney -= price;

                if (!this.stockProducts[name]) {
                    this.stockProducts[name] = quantity;
                }
                else {
                    this.stockProducts[name] += quantity;
                }

                this.history.push(`Successfully loaded ${quantity} ${name}`);
            }
            else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.history.join("\n");
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        this.menu[meal] = {
            products: neededProducts,
            price
        };

        let mealsCount = Object.values(this.menu).length;

        return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        let meals = Object.values(this.menu);

        if (meals.length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        let output = '';

        for (const meal in this.menu) {
            let price = this.menu[meal].price;

            output += `${meal} - $ ${price}\n`;
        }

        return output.trimEnd();
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let products = this.menu[meal].products;

        let haveAllProducts = true;

        for (const product of products) {
            let data = product.split(' ');

            let name = data[0];
            let quantity = Number(data[1]);

            if (this.stockProducts[name] >= quantity) {
                this.stockProducts[name] -= quantity;
            }
            else {
                haveAllProducts = false;
                break;
            }
        }

        if (haveAllProducts) {
            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
        
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }
}