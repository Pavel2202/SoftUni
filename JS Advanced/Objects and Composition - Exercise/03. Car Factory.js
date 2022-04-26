function solve(car) {
    let result = {};

    result.model = car.model;

    if (car.power <= 90) {
        result.engine = {
            power: 90,
            volume: 1800
        };
    }
    else if (car.power > 90 && car.power <= 120) {
        result.engine = {
            power: 120,
            volume: 2400
        };
    }
    else if (car.power > 120 && car.power <= 200) {
        result.engine = {
            power: 200,
            volume: 3500
        };
    }

    result.carriage = {
        type: car.carriage,
        color: car.color
    };

    let wheels = car.wheelsize;

    if (car.wheelsize % 2 == 0) {
        wheels--;
    }

    result.wheels = [wheels, wheels, wheels, wheels];

    return result;
}