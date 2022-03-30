function solve(input){
    let n = Number(input[0]);
    let number = 2;
    for (let index = 0; index <= n; index+=2) {
        let result = Math.pow(number, index);
        console.log(result);        
    }

}