function solve(input) {
    const cars = {};

    const createCar = function() {

        return {
            create: function(name, inherit, parentName) {
                cars[name] = inherit ? Object.create(cars[parentName]) : {};
            },
            set: function(name, key, value) {
                cars[name][key] = value;
            },
            print: function(name) {
                let output = [];

                for (const key in cars[name]) {
                    output.push(`${key}:${cars[name][key]}`);
                }

                console.log(output.join(','));
            }
        }
    }

    const result = createCar();

    input.map((x) => x.split(" ")).forEach(([command, ...values]) => result[command].apply(null, values));
}