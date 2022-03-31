function solve(input){
    let message = input[0];
    let index = 0;
    
    while (message != "Stop") {
        console.log(message)
        index++;
        message = input[index];
    }
}