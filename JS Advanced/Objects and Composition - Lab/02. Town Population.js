function solve(input) {
    let towns = [];

    for (let line of input) {
        let data = line.split(" <-> ");

        let name = data[0];
        let population = Number(data[1]);

        let town = {
            name,
            population
        };

        if (towns.some(t => t.name == name)) {
            let index = towns.findIndex(t => t.name == name);

            let oldTown = towns.splice(index, 1);
            let oldTownPopulation = oldTown[0].population;

            let newTownPopulation = population + oldTownPopulation;

            let newTown = {
                name,
                population: newTownPopulation
            };

            towns.splice(index, 0, newTown);
        }
        else {
            towns.push(town);
        }
    }

    for (let town of towns) {
        console.log(`${town.name} : ${town.population}`);
    }
}