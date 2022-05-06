function solve(input, criteria) {
    let employees = JSON.parse(input);

    if (criteria == 'all') {
        employees
            .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
            .forEach(x => console.log(x));
    }
    else {
        let [prop, value] = criteria.split('-');

        employees
            .filter(x => x[prop] == value)
            .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
            .forEach(x => console.log(x));
    }
}