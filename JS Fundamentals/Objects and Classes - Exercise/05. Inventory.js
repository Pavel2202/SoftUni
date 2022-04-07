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

        for (let item of data[2].split(", ")) {
            items.push(item);
        }

        let hero = new Hero(name, level, items);
        heroes.push(hero);
    }

    heroes.sort((a, b) => {
        return a.level - b.level;
    })

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}