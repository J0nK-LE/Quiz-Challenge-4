let timerEl = document.querySelector("#timer");
let startBtn = document.querySelector("#startBtn")

let timer = 75;
let countingEl;


// countdownTimer()

startBtn.addEventListener("click", function(){
    countdownTimer()
})

function countdownTimer(){
    countingEl = setInterval(function(){
        timer--;
        timerEl.textContent = "Time left: " + timer;

        if (timer === 0) {
            clearInterval(countingEl)
        }

    },1000)
}