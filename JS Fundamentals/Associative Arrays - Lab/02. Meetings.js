function solve(input) {
    let schedule = {};

    for (let line of input) {
        let data = line.split(" ");

        let day = data[0];
        let name = data[1];

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        }
        else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}