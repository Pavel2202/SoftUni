function solve(input){
    let drink = input[0];
    let town = input[1];
    let count = Number(input[2]);
    let result = 0.0;
    switch (town){
        case "Sofia":
            switch (drink){
                case "coffee":
                    result = count * 0.50;
                    break;
                    case "water":
                        result = count * 0.80;
                        break;
                        case "beer":
                            result = count * 1.20;
                            break;
                            case "sweets":
                                result = count * 1.45;
                                break;
                                case "peanuts":
                                    result = count * 1.60;
                                    break;
            }
            break;
            case "Plovdiv":
            switch (drink){
                case "coffee":
                    result = count * 0.40;
                    break;
                    case "water":
                        result = count * 0.70;
                        break;
                        case "beer":
                            result = count * 1.15;
                            break;
                            case "sweets":
                                result = count * 1.30;
                                break;
                                case "peanuts":
                                    result = count * 1.50;
                                    break;
            }
            break;
            case "Varna":
            switch (drink){
                case "coffee":
                    result = count * 0.45;
                    break;
                    case "water":
                        result = count * 0.70;
                        break;
                        case "beer":
                            result = count * 1.10;
                            break;
                            case "sweets":
                                result = count * 1.35;
                                break;
                                case "peanuts":
                                    result = count * 1.55;
                                    break;
            }
            break;
    }
    console.log(result);
}