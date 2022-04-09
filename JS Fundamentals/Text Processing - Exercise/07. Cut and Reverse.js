function solve(input) {
    let middleIndex = (input.length) / 2;
    let firstWord = input.substring(0, middleIndex);
    let secondWord = input.substring(middleIndex, input.length);

    let firstArray = firstWord.split("");
    let firstArrayReversed = firstArray.reverse();
    let firstReversed = firstArrayReversed.join("");
    
    let secondArray = secondWord.split("");
    let secondArrayReversed = secondArray.reverse();
    let secondReversed = secondArrayReversed.join("");

    console.log(firstReversed);
    console.log(secondReversed);
}