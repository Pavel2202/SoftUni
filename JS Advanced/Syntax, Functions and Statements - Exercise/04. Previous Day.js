function solve(year, month, day) {
    let previousDay = new Date(year, month + 1, day - 1);
    let previousYear = previousDay.getFullYear();
    let previousMonth = previousDay.getMonth() - 1;
    let previousDate = previousDay.getDate();
    console.log(`${previousYear}-${previousMonth}-${previousDate}`);
}