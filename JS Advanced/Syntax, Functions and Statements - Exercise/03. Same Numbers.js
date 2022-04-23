function solve(number) {
    let text = number.toString();
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let num = Number(text[i]);
        sum += num;
    }

    for (let i = 1; i < text.length; i++) {
        if (text[i] != text[i - 1]) {
            console.log('false');
            console.log(sum);
            return;
        }
    }

    console.log('true');
    console.log(sum);
}