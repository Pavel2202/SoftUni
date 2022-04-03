function solve(numOne, numTwo, numThree) {
    let negativeCount = 0;

    numOne = numOne.toString();
    numTwo = numTwo.toString();
    numThree = numThree.toString();

    if (numOne[0] == "-") {
        negativeCount++;
    }
    if (numTwo[0] == "-") {
        negativeCount++;
    }
    if (numThree[0] == "-") {
        negativeCount++;
    }

    if (negativeCount % 2 == 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }
}