function solve(input) {
    let data = input.split(" ");

    for (let word of data) {
        if (word[0] == "#" && word.length > 1) {
            let result = word.substring(1, word.length);

            let isValid = true;
            let upper = result.toUpperCase();

            for (let i = 0; i < upper.length; i++) {
                if (upper[i].charCodeAt(0) < 65 || upper[i].charCodeAt(0) > 90) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(result);
            }
        }
    }
}