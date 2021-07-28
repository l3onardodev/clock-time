const hoursLabel = document.querySelector('.content-main-section-hours');
const minutesLabel = document.querySelector('.content-main-section-minutes');
const secondsLabel = document.querySelector('.content-main-section-seconds');
const greetingStatus = document.querySelector('.greeting-main-section-content');

function getTime() {
    const timeGenerated = Date();

    const timeArray = timeGenerated.split(' ');
    const timeLabel = timeArray[4].split(':');

    let hours = timeLabel[0];
    let minutes = timeLabel[1];
    let seconds = timeLabel[2];

    if (hours >= 5 && hours <= 12) {
        greetingStatus.textContent = 'Bom dia!';
    } else if (hours > 12 && hours <= 18) {
        greetingStatus.textContent = 'Boa tarde!'
    } else {
        greetingStatus.textContent = 'Boa noite!'
    }

    hoursLabel.textContent = hours;
    minutesLabel.textContent = minutes;
    secondsLabel.textContent = seconds;
}

getTime();
setInterval(getTime, 1000);