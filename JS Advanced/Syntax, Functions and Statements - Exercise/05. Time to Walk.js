function solve(steps, footprintMeters, kmPerHour) {
    let distanceInMeters = (steps*footprintMeters);
    let bonusBreaks = Math.floor(distanceInMeters/500)*60;
    let speed = kmPerHour*1000/3600;
    let time = distanceInMeters/speed+bonusBreaks;

    let hours = Math.floor(time/60/60).toFixed(0).padStart(2, '0');
    let minutes = Math.floor((time-hours*3600)/60).toFixed(0).padStart(2,'0');
    let seconds = (time-hours*60*60-minutes*60).toFixed(0).padStart(2,'0');

    console.log(`${hours}:${minutes}:${seconds}`);
}