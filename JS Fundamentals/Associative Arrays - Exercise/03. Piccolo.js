function solve(input) {
    let cars = [];

    for (let line of input) {
        let data = line.split(", ");

        let command = data[0];
        let plateNumber = data[1];

        if (command == "IN" && !cars.includes(plateNumber)) {
            cars.push(plateNumber);
        }
        else if (command == "OUT" && cars.includes(plateNumber)) {
            let index = cars.indexOf(plateNumber);
            cars.splice(index, 1);
        }
    }

    let sortedCars = cars.sort((a, b) => {
        return a.localeCompare(b);
    })

    if (sortedCars.length == 0) {
        console.log(`Parking Lot is Empty`)
    }
    else {
        for (let car of sortedCars) {
            console.log(car);
        }
    }
}