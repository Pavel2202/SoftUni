function solve(input){
    let area = Number(input[0]);
    let sum = area * 7.61;
    let discount = sum * 18 / 100;
    sum = sum - discount;
    console.log(`The final price is: ${sum} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}