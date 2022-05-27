class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping(product) {
        let productName = product[0];
        let productPrice = Number(product[1]);

        if (this.budget < productPrice) {
            throw new Error('Not enough money to buy this product');
        }
        else {
            this.budget -= productPrice;
            this.products.push(productName);
            return `You have successfully bought ${productName}!`;
        }
    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let products = recipe.productsList;

        let hasAllProducts = true;

        for (const product of products) {
            if (!this.products.includes(product)) {
                hasAllProducts = false;
                continue;
            }
        }

        if (hasAllProducts) {
            this.dishes.push(recipe);
            return `${recipeName} has been successfully cooked!`;
        }
        else {
            throw new Error('We do not have this product')
        }
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName == dish)) {
            throw new Error('We do not have this dish');
        }
        else if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        else {
            this.guests[name] = dish;

            return `You have successfully invited ${name}!`;
        }
    }

    showAttendance() {
        let output = '';

        let guestsArrays = Object.entries(this.guests);

        for (const [guestName, dish] of guestsArrays) {
            output += `${guestName} will eat ${dish}, which consists of ${this.dishes.find(x => x.recipeName == dish).productsList.join(', ')}\n`;
        }

        return output.trimEnd();
    }
}