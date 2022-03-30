function solve(input){
    let town = input[0];
    let count = Number(input[1]);
    let price = 0.0;
    switch (town){
        case "Sofia":
            if (count < 0){
                console.log("error");
            }
            else if (count >= 0 && count <= 500){
                price = count * 0.05;
                console.log(price.toFixed(2));
            }
            else if (500 < count && count <= 1000){
                price = count * 0.07;
                console.log(price.toFixed(2));
            }
            else if (1000 < count && count <= 10000){
                price = count * 0.08;
                console.log(price.toFixed(2));
            }
            else if (10000 < count){
                price = count * 0.12;
                console.log(price.toFixed(2));
            }
            break;
            case "Varna":
            if (count < 0){
                console.log("error");
            }
            else if (count >= 0 && count <= 500){
                price = count * 0.045;
                console.log(price.toFixed(2));
            }
            else if (500 < count && count <= 1000){
                price = count * 0.075;
                console.log(price.toFixed(2));
            }
            else if (1000 < count && count <= 10000){
                price = count * 0.1;
                console.log(price.toFixed(2));
            }
            else if (10000 < count){
                price = count * 0.13;
                console.log(price.toFixed(2));
            }
            break;
            case "Plovdiv":
            if (count < 0){
                console.log("error");
            }
            else if (count >= 0 && count <= 500){
                price = count * 0.055;
                console.log(price.toFixed(2));
            }
            else if (500 < count && count <= 1000){
                price = count * 0.08;
                console.log(price.toFixed(2));
            }
            else if (1000 < count && count <= 10000){
                price = count * 0.12;
                console.log(price.toFixed(2));
            }
            else if (10000 < count){
                price = count * 0.145;
                console.log(price.toFixed(2));
            }
            break;
            default:
                console.log("error");
                break;
    }
}