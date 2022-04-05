function solve(input) {
    let map = new Map();

    for (let line of input) {
        let data = line.split(" ");

        let name = data.shift();
        let grades = data.map(Number);

        if (map.has(name)) {
            let currentGrades = map.get(name);
            
            for (let grade of grades) {
                currentGrades.push(grade);
            }

            map.set(name, currentGrades);
        }
        else {
            map.set(name, grades);
        }
    }  

    let sorted = Array.from(map);

    sorted.sort(sortNames);

    function sortNames(a, b) {
        let keyA = a[0];
        let keyB = b[0];

        return keyA.localeCompare(keyB);
    };

    let result = new Map();

    for (let [key, value] of sorted) {
        let sum = 0;

        for (let grade of value) {
            sum += grade;
        }

        average = sum / value.length;

        result.set(key, average);
    }

    for (let [key, value] of result) {
        console.log(`${key}: ${value.toFixed(2)}`);
    }
}