function solve(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let num = Number(number[i]);

        sum += num;
    }

    console.log(`${number} Amazing? ${sum.toString().includes('9') ? "True" : "False"}`);
}