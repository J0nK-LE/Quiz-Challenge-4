let timerEl = document.querySelector("#timer");

let timer = 75;
let countingEl;


countdownTimer()


function countdownTimer(){
    countingEl = setInterval(function(){
        timer--;
        timerEl.textContent = "Time left: " + timer;

        // if (timer === 0) {
        // }

    },1000)
}