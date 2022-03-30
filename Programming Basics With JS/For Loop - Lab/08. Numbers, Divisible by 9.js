function solve(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let sum = 0;
    
    for (let index = first; index <= second; index++) {
        if (index % 9 == 0){
            sum += index;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let index = first; index <= second; index++) {
        if (index % 9 == 0){
            console.log(index);
        }
    }
}