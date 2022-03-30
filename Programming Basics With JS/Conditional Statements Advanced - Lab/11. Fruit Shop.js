function solve(input){
    let fruit = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let price = 0.0;
    switch(day){
        case "Monday":
            case "Tuesday":
                case "Wednesday":
                    case "Thursday":
                        case "Friday":
                            switch(fruit){
                                case "banana":
                                    price = count * 2.50;
                                    console.log(price.toFixed(2));
                                    break;
                                    case "apple":
                                        price = count * 1.20;
                                        console.log(price.toFixed(2));
                                        break;
                                        case "orange":
                                            price = count * 0.85;
                                            console.log(price.toFixed(2));
                                            break;
                                            case "grapefruit":
                                                price = count * 1.45;
                                                console.log(price.toFixed(2));
                                                break;
                                                case "kiwi":
                                                    price = count * 2.70;
                                                    console.log(price.toFixed(2));
                                                    break;
                                                    case "pineapple":
                                                        price = count * 5.50;
                                                        console.log(price.toFixed(2));
                                                        break;
                                                        case "grapes":
                                                            price = count * 3.85;
                                                            console.log(price.toFixed(2));
                                                            break;    
                                                            default:
                                                                console.log("error");
                                                                break;                                            
                            }
                            break;
                            case "Saturday":
                                case "Sunday":
                                    switch(fruit){
                                        case "banana":
                                            price = count * 2.70;
                                            console.log(price.toFixed(2));
                                            break;
                                            case "apple":
                                                price = count * 1.25;
                                                console.log(price.toFixed(2));
                                                break;
                                                case "orange":
                                                    price = count * 0.90;
                                                    console.log(price.toFixed(2));
                                                    break;
                                                    case "grapefruit":
                                                        price = count * 1.60;
                                                        console.log(price.toFixed(2));
                                                        break;
                                                        case "kiwi":
                                                            price = count * 3;
                                                            console.log(price.toFixed(2));
                                                            break;
                                                            case "pineapple":
                                                                price = count * 5.60;
                                                                console.log(price.toFixed(2));
                                                                break;
                                                                case "grapes":
                                                                    price = count * 4.20;
                                                                    console.log(price.toFixed(2));
                                                                    break;    
                                                                    default:
                                                                        console.log("error");
                                                                        break; 
                                    }
                                    break; 
                                    default:
                                        console.log("error");
                                        break; 

    }
}