function solve(numbers, commands) {
    let takeCount = commands[0];
    let deleteCount = commands[1];
    let search = commands[2];

    let array = numbers.slice(0, takeCount);

    for (let i = 0; i < deleteCount; i++) {
        array.shift();
    }

    let timesFound = 0;

    for (let num of array) {
        if (num == search) {
            timesFound++;
        }
    }
    
    console.log(`Number ${search} occurs ${timesFound} times.`);
}