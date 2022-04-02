function solve(n) {   
    for (let i = 1; i <= n; i++) {
        let isSpecial = "False";
        let numSum = 0;
        i = i.toString();
        for (let j = 0; j < i.length; j++) { 
            numSum += Number(i[j]);
        }

        if (numSum == 5 || numSum == 7 || numSum == 11) {
            isSpecial = "True";
        }

        console.log(`${i} -> ${isSpecial}`);
    }
}