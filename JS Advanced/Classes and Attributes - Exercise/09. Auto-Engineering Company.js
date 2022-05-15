function solve(input) {
    let cars = [];
    let addedBrands = [];
    let addedModels = [];

    for (const line of input) {
        let data = line.split(' | ');

        let brand = data[0];
        let model = data[1];
        let producedCount = Number(data[2]);

        let car = {
            brand,
            model,
            producedCount
        };

        if (!addedModels.includes(model)) {
            addedModels.push(model);
            cars.push(car);
        }
        else {
            car = cars.find(x => x.model == model);
            car.producedCount += producedCount;
            let carIndex = cars.indexOf(car);
            cars.splice(carIndex, 1, car);
        }

        if (!addedBrands.includes(brand)) {
            addedBrands.push(brand);
        }
    }

    for (const brand of addedBrands) {
        let brandCars = cars.filter(x => x.brand == brand);

        console.log(brand);

        for (const car of brandCars) {
            console.log(`###${car.model} -> ${car.producedCount}`);
        }
    }
}