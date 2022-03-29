function solve(input){
    let dogFood = Number(input[0]);
    let dogTotal = dogFood * 2.50;

    let catFood = Number(input[1]);
    let catTotal = catFood * 4;

    let result = dogTotal + catTotal;

    console.log(`${result} lv.`)
}