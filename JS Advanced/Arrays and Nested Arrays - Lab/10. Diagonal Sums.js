function solve(input) {
    let leftRightDiagonal = 0;
    let rightLeftDiagonal = 0;

    let index = 0;

    for (let row of input) {
        leftRightDiagonal += row[index];
        index++;
    }

    index = input[0].length - 1;

    for (let row of input) {
        rightLeftDiagonal += row[index];
        index--;
    }

    console.log(`${leftRightDiagonal} ${rightLeftDiagonal}`);
}