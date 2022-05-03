function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type="button"]');

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            let days = Number(daysInput.value);
            let hours = Number(hoursInput.value);
            let minutes = Number(minutesInput.value);
            let seconds = Number(secondsInput.value);

            if (e.target.id == 'daysBtn') {
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            }
            else if (e.target.id == 'hoursBtn') {
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            }
            else if (e.target.id == 'minutesBtn') {
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;
            }
            else if (e.target.id == 'secondsBtn') {
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
            }

            daysInput.value = days;
            hoursInput.value = hours;
            minutesInput.value = minutes;
            secondsInput.value = seconds;
        });
    }
}