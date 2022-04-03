function solve(input) {
    let array = input[0].split(" ").map(Number);

    for (let i = 1; i < input.length; i++) {
        let line = input[i].split(" ");

        let command = line[0];
        let value = Number(line[1]);

        if (command == "Add") {
            array.push(value);
        }
        else if (command == "Remove") {
            array = array.filter(el => el != value);
        }
        else if (command == "RemoveAt") {
            array.splice(value, 1);
        }
        else if (command == "Insert") {
            let index = Number(line[2]);

            array.splice(index, 0, value);
        }
    }

    console.log(array.join(" "));
}