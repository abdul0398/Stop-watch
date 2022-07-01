let sec = 00;
let msec = 00;
let min = 00;
let displayMsec = document.getElementById('msec');
let displaySec = document.getElementById('sec');
let displayMin = document.getElementById('min');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let running = false;
let timer;

//
function main() {
    ++msec;
    if (msec == 100) {
        ++sec;
        msec = 0;
        displaySec.innerHTML = "0" + sec;
        if(sec == 60){
            ++min;
            displayMin.innerHTML = "0" + min;
        }
    }
    displayMsec.innerHTML = msec;

}
function strt() {
    if (running == false) {
        running = true;
        timer = window.setInterval(main, 10);

    }
}
function stop() {
    clearInterval(timer);
    running = false;

}
function reset() {
    sec = 0;
    msec = 0;
    running = false;
    clearInterval(timer);
    displayMsec.innerHTML = sec + '0';
    displaySec.innerHTML = msec + '0';

}
startButton.addEventListener('click', strt);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);