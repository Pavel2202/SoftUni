function solve(input) {
    let heroes = [];

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    for (let line of input) {
        let data = line.split(" / ");

        let name = data[0];
        let level = Number(data[1]);
        let items = [];

        if (data.length == 3) {
            for (let item of data[2].split(", ")) {
                items.push(item);
            }
        }

        let hero = new Hero(name, level, items);
        heroes.push(hero);
    }

    let output = JSON.stringify(heroes);

    return output;
}