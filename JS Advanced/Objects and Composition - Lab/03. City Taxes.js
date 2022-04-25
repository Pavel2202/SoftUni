function solve(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes : () => {
            city.treasury = Math.ceil(city.treasury + city.taxRate * city.population);
        },
        applyGrowth : (percentage) => {
            city.population = Math.ceil(city.population + city.population * (percentage / 100));
        },
        applyRecession : (percentage) => {
            city.treasury = Math.ceil(city.treasury - city.treasury * (percentage / 100));
        }
    };

    return city;
}