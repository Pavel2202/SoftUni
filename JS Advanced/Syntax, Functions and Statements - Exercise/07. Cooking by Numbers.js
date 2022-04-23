function solve(num, ...operations) {
    let number = Number(num);
    
    for (let operation of operations) {
        if (operation == 'chop') {
            number = number / 2;
        }
        else if (operation == 'dice') {
            number = Math.sqrt(number);
        }
        else if (operation == 'spice') {
            number++;
        }
        else if (operation == 'bake') {
            number = number * 3;
        }
        else if (operation == 'fillet') {
            number = number - number * 0.20;
        }

        console.log(number);
    }
}