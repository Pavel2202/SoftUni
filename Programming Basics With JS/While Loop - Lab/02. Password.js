function solve(input){
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let inputPassword = input[index];
    
    while (password !== inputPassword) {
        index++;
        inputPassword = input[index];
    }
    
    console.log(`Welcome ${username}!`)
}