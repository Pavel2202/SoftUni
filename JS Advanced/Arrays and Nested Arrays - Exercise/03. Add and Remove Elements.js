function solve(input) {
    let number = 1;
    let result = [];

    for (let command of input) {
        if (command == "add") {
            result.push(number)
        }
        else if (command == "remove") {
            result.pop();
        }

        number++;
    }

    if (result.length == 0) {
        console.log("Empty");
    }
    else {
        for (let element of result) {
            console.log(element);
        }
    }
}