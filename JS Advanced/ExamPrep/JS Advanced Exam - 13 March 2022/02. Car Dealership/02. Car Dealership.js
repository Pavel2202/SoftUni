class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model.length == 0 || typeof model !== 'string') {
            throw new Error('Invalid input!');
        }

        if (horsepower < 0) {
            throw new Error('Invalid input!');
        }

        if (price < 0) {
            throw new Error('Invalid input!');
        }

        if (mileage < 0) {
            throw new Error('Invalid input!');
        }

        let car = {
            model,
            horsepower,
            price,
            mileage
        };

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(x => x.model == model);

        if (!car) {
            throw new Error(`${model} was not found!`);
        }

        this.availableCars.splice(this.availableCars.indexOf(car), 1);

        let soldPrice = 0;
        let carMileage = car.mileage;

        let mileageDifference = carMileage - desiredMileage;

        if (mileageDifference <= 0) {
            soldPrice = car.price;
        }
        else if (mileageDifference > 0 && mileageDifference <= 40000) {
            soldPrice = car.price - car.price * 0.05;
        }
        else if (mileageDifference > 40000){
            soldPrice = car.price - car.price * 0.10;
        }

        let horsepower = car.horsepower;

        let soldCar = {
            model,
            horsepower,
            soldPrice
        };

        this.totalIncome += soldPrice;

        this.soldCars.push(soldCar);

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        let output = '';

        if (this.availableCars.length == 0) {
            output += 'There are no available cars';
        }
        else {
            output += `-Available cars:\n`;

            for (const car of this.availableCars) {
                output += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`
            }
        }

        return output.trimEnd();
    }

    salesReport(criteria) {
        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => {
                return b.horsepower - a.horsepower;
            })
        }
        else if (criteria == 'model') {
            this.soldCars.sort((a, b) => {
                return a.model.localeCompare(b.model);
            })
        }
        else {
            throw new Error('Invalid criteria!');
        }

        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        output += `-${this.soldCars.length} cars sold:\n`

        for (const car of this.soldCars) {
            output += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`;
        }

        return output.trimEnd();
    }
}