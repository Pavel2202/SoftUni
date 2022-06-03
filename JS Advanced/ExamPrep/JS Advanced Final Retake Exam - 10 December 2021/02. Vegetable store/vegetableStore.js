class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let types = [];

        for (const line of vegetables) {
            let data = line.split(' ');

            let type = data[0];
            let quantity = Number(data[1]);
            let price = Number(data[2]);

            let vegetable = {
                type,
                quantity,
                price
            };

            if (this.availableProducts.some(x => x.type == type)) {
                let presentVegetable = this.availableProducts.find(x => x.type == type);

                presentVegetable.quantity += quantity;

                if (price > presentVegetable.price) {
                    presentVegetable.price = price;
                }
            }
            else {
                this.availableProducts.push(vegetable);
            }

            if (!types.includes(type)) {
                types.push(type);
            }
        }

        return `Successfully added ${types.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const line of selectedProducts) {
            let data = line.split(' ');

            let type = data[0];
            let quantity = Number(data[1]);

            if (!this.availableProducts.some(x => x.type == type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let vegetable = this.availableProducts.find(x => x.type == type);

            if (quantity > vegetable.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += quantity * vegetable.price;
            vegetable.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let vegetable = this.availableProducts.find(x => x.type == type);

        if (!vegetable) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > vegetable.quantity) {
            vegetable.quantity = 0;

            return `The entire quantity of the ${type} has been removed.`
        }
        else {
            vegetable.quantity -= quantity;

            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        let output = "Available vegetables:\n";

        this.availableProducts.sort((a, b) => {
            return a.price - b.price;
        })

        for (const vegetable of this.availableProducts) {
            output += `${vegetable.type}-${vegetable.quantity}-$${vegetable.price}\n`;
        }

        output += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;

        return output;
    }
}