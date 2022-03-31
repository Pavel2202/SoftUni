function solve(input) {
    let index = 0;
    let current = input[index];
    let max = Number(current);

    while(current != "Stop"){
        current = Number(current);

        if (current > max){
            max = current
        }

        index++;
        current = input[index];
    }

    console.log(max);
}