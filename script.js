'use strict';

let dateNumber = document.querySelector('.date').innerHTML;
let date = new Date(dateNumber);

function getTime(date) {
    let parse = Date.parse(date) - Date.parse(new Date());
    let object = {
        total: parse,
        days: Math.floor(parse / (1000 * 60 * 60 * 24)),
        hours: Math.floor((parse / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((parse / 1000 / 60) % 60),
        seconds: Math.floor((parse / 1000) % 60)
    };
    return object;
}
function getNum(number) {
    if (number >= 0 && number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
}
function setTime(date) {
    let days = document.querySelector('.days'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');
    let interval = setInterval(update, 1000);
    update();
    function update() {
        let timer = getTime(date);
        days.innerHTML = getNum(timer.days);
        hours.innerHTML = getNum(timer.hours);
        minutes.innerHTML = getNum(timer.minutes);
        seconds.innerHTML = getNum(timer.seconds);
        if (timer.total <= 0) {
            clearInterval(interval);
        }
    }
}
setTime(date);