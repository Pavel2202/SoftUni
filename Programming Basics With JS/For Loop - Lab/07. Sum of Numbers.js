function solve(input){
    let text = input[0];
    let sum = 0;
    for (let index = 0; index < text.length; index++) {
       let num = Number(text[index]);
       sum += num;
    }
    
    console.log(`The sum of the digits is:${sum}`);
}