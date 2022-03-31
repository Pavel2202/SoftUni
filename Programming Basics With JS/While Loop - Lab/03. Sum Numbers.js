function solve(input) {
    let goal = Number(input[0]);
    let index = 1;
    let sum = 0;
    while(sum < goal) {
        let number = Number(input[index]);

        sum += number;
        index++;
    }  

    console.log(sum);
}