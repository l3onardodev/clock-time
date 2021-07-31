const axios = require('axios');

const buttonClock = document.querySelector('.choose-main-button-clock');
const buttonTimer = document.querySelector('.choose-main-button-timer');
const chooseMainContent = document.querySelector('.choose-main-content');
const main = document.querySelector('body');
const bgTimer = document.querySelector('.bg-container-timer');
const bgClock = document.querySelector('.bg-container-clock');

const selectCountry = document.querySelector('.choose-country-select-content');

function calculateTime(country) {
    console.log(country);
    axios.get(`https://timezone.abstractapi.com/v1/current_time/?api_key=8c71333d98084a72b120499d82384b0d&location=${country}`)
        .then((res) => {
            console.log(res);
        // const data = res.data.datetime.slice(' ').slice(':');
        // const hours = data[0];
        // const minutes = data[1];
        // const seconds = data[3];
        // console.log(hours, minutes, seconds)
        })  
        .catch(err => {console.log(err);})
}

function a () {
    chooseMainContent.style.height = '0vh';
    //querySelectorAll returns an array.
    let elements = document.querySelectorAll('.choose-main-button');
    //iterate over all array's elements.
    for(let x = 0; x < elements.length; x++) {
        elements[x].classList.add('hidden');
    }
}

buttonClock.addEventListener('click', function() {
    a();
    bgTimer.style.backgroundImage = 'none';
    bgTimer.style.backgroundColor = 'transparent'
})

buttonTimer.addEventListener('click', function() {
    a();
    bgClock.style.backgroundImage = 'none';
    // bgClock.style.backgroundColor = 'transparent'
})

console.log(selectCountry.disabled)

let selectedIndexNow = 0;

selectCountry.addEventListener('click', () => {
    if (!(selectCountry.options.selectedIndex === 0 || selectCountry.options.selectedIndex === selectedIndexNow)) {
        selectedIndexNow = selectCountry.options.selectedIndex;
        console.log(selectCountry.options.selectedIndex);
        console.log(selectedIndexNow)

        calculateTime('Brazil');
    }
});