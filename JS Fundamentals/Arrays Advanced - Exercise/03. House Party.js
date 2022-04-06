function solve(input) {
    let list = [];

    for (let line of input) {
        let data = line.split(" ");

        let name = data[0];
        let description = data.slice(1);
        
        if (description.length == 2) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            else {
                list.push(name);
            }
        }
        else {
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            }
            else {
                console.log(`${name} is not in the list!`)
            }
        }
    }

    for (let guest of list) {
        console.log(guest);
    }
}