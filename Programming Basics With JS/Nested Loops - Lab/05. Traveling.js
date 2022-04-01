function solve(input) {
    let index = 0;
    let country = input[index];
    index++;
    let targetMoney = Number(input[index]);
    index++;
    let sum = 0;

    while (country != "End") {
        let money = Number(input[index]);
        index++;

        sum += money;
        if (sum >= targetMoney) {
            console.log(`Going to ${country}!`);

            country = input[index];
            index++;
            if (country == "End") {
                return;
            }

            targetMoney = Number(input[index]);
            index++;
            sum = 0;
        }
    }
}