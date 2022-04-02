function solve(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let m = 0; m < n; m++) {
                let firstLetter = String.fromCharCode(97 + i);
                let secondLetter = String.fromCharCode(97 + j);
                let thirdLetter = String.fromCharCode(97 + m);

                let result = firstLetter + secondLetter + thirdLetter;

                console.log(`${result}`);
            }
        }
    }
}