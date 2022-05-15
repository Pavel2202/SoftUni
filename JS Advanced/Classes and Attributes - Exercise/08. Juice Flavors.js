function solve(input) {
    let juices = {};
    let bottles = {};

    for (const line of input) {
        let data = line.split(' => ');

        let juice = data[0];
        let quantity = Number(data[1]);

        if (juices[juice]) {
            juices[juice] += quantity;
        }
        else {
            juices[juice] = quantity;
        }

        while (juices[juice] >= 1000) {
            if (bottles[juice]) {
                bottles[juice]++;
            }
            else {
                bottles[juice] = 1;
            }
            juices[juice] -= 1000;
        }
    }

    let bottlesArray = Object.entries(bottles);

    for (const [juice, quantity] of bottlesArray) {
        console.log(`${juice} => ${quantity}`);
    }
}