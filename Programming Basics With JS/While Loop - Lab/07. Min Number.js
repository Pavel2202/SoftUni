function solve(input) {
    let index = 0;
    let current = input[index];
    let min = Number(current);

    while(current != "Stop"){
        current = Number(current);

        if (current < min){
            min = current
        }

        index++;
        current = input[index];
    }

    console.log(min);
}