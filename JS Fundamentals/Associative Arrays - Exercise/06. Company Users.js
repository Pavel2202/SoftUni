function solve(input) {
    let companies = {};

    for (let line of input) {
        let data = line.split(" -> ");

        let companyName = data[0];
        let employeeId = data[1];

        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }

        let employees = companies[companyName];
        if (employees.includes(employeeId)) {
            continue;
        }

        companies[companyName].push(employeeId);
    }

    let sorted = Object.entries(companies);

    sorted.sort((a, b) => {
        let sortA = a[0];
        let sortB = b[0];

        return sortA.localeCompare(sortB);
    })

    for (let [key, value] of sorted) {
        console.log(key);

        for (let employeeId of value) {
            console.log(`-- ${employeeId}`);
        }
    }
}