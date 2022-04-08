function solve(input) {
    let assocArray = {};

    for (let line of input) {
        let data = line.split(": ");

        let name = data[0];
        let cardsArray = data[1].split(", ");

        if (assocArray.hasOwnProperty(name)) {
            let currentCards = assocArray[name];

            for (let card of cardsArray) {
                if (currentCards.includes(card)) {
                    continue;
                }
                else {
                    currentCards.push(card)
                }
            }

            assocArray[name] = currentCards;
        }
        else {
            let cards = [];

            for (let card of cardsArray) {
                if (cards.includes(card)) {
                    continue;
                }
                cards.push(card);
            }

            assocArray[name] = cards;
        }
    }

    let array = Object.entries(assocArray);

    let result = {};

    for (let [key, value] of array) {
        let sum = 0;
        let power;
        let type;

        for (let card of value) {
            let p = card.substring(0, card.length - 1);
            power = totalPower(p)
        
            let t = card[card.length - 1];
            type = typeValue(t); 
            
            
            sum += power * type;
        }

        result[key] = sum;
    }

    function totalPower(p) {
        let result = 0;

        switch (p) {
            case "2":
                result = 2;
                break;
            case "3":
                result = 3;
                break;
            case "4":
                result = 4;
                break;
            case "5":
                result = 5;
                break;
            case "6":
                result = 6;
                break;
            case "7":
                result = 7;
                break;
            case "8":
                result = 8;
                break;
            case "9":
                result = 9;
                break;
            case "10":
                result = 10;
                break;
            case "J":
                result = 11;
                break;
            case "Q":
                result = 12;
                break;
            case "K":
                result = 13;
                break;
            case "A":
                result = 14;
                break;
        }

        return result;
    }

    function typeValue(t) {
        let result = 0;

        switch (t) {
            case "C":
                result = 1;
                break;
            case "D":
                result = 2;
                break;
            case "H":
                result = 3;
                break;
            case "S":
                result = 4;
                break;
        }

        return result;
    }

    let arrayResult = Object.entries(result);

    for (let [key, value] of arrayResult) {
        console.log(`${key}: ${value}`)
    }
}