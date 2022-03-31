function solve(input) {
    let index = 0;
    let studentName = input[index];
    index++;

    let currentGrade = Number(input[index]);
    index++;
    let sumOfGrades = 0;

    let failedTimes = 0;
    let currentGradeCount = 0;

    while(currentGradeCount < 12) {
        if (currentGrade < 4) {
            failedTimes++;

            if (failedTimes > 1){
                break;
            }
        }

        sumOfGrades += currentGrade;
        currentGradeCount++;

        currentGrade = Number(input[index]);
        index++;
    }

    if (failedTimes > 1) {
        console.log(`${studentName} has been excluded at ${currentGradeCount} grade`);
    }
    else {
        let average = sumOfGrades / 12;
        console.log(`${studentName} graduated. Average grade: ${average.toFixed(2)}`);
    }
}