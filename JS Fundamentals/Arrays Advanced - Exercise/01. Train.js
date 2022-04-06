function solve(input) {
    let train = input[0].split(" ").map(Number);

    let maxCapacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let line = input[i].split(" ");

        if (line.length == 2) {
            let wagon = Number(line[1]);
            train.push(wagon);
        }
        else {
            let passenger = Number(line[0]);
            for (let wagon of train) {
                if (wagon + passenger <= maxCapacity) {
                    let index = train.indexOf(wagon);
                    train[index] = wagon + passenger;
                    break;
                }
            }
        }
    }

    console.log(train.join(" "));
}