let timerEl = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let questionEl = document.getElementById("questions");
let qTitleEl = document.getElementById("questionTitle");
let feedback = document.getElementById("feedback");
let startScreenEl = document.getElementById("startScreen");
let quizEnd = document.getElementById("quizEnd");
let questionChoices = document.getElementById("choices");
let finalScore = document.getElementById("finalScore");
let restartQuiz = document.getElementById("restartQuiz");
let submitHS = document.getElementById("submitHS");
let scoreRecord = document.getElementById("scoreRecord");

let time = 75;
let countingEl;
let questionIndex = 0;

let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
let button4 = document.createElement("button");

startBtn.addEventListener("click", function () {
  countdownTimer();
  startQuiz();
});

submitHS.addEventListener("click", function () {
  let initials = document.getElementById("initials").value.toUpperCase();
  let highScore = finalScore.textContent.toUpperCase();

  // console.log(highScore);
  // console.log(initials);
  if (!initials || !highScore) {
    return;
  } else {
    localStorage.setItem("initials", initials);
    localStorage.setItem("highScore", highScore);

    renderHighScore();
  }
});

restartQuiz.addEventListener("click", function () {
  window.location.reload();
});

function renderHighScore() {
  var initials = localStorage.getItem("initials");
  var highScore = localStorage.getItem("highScore");

  if (!initials || !highScore) {
    return;
  }

  scoreRecord.textContent = `${initials}  ${highScore}`;
}

function startQuiz() {
  startScreenEl.setAttribute("class", "hide");
  questionEl.removeAttribute("class", "hide");
  runQuestions();
}

function endQuiz() {
  questionEl.setAttribute("class", "hide");
  quizEnd.removeAttribute("class", "hide");
  feedback.setAttribute("class", "hide");
  timerEl.setAttribute("class", "hide");
  finalScore.textContent = time;
}

function countdownTimer() {
  countingEl = setInterval(function () {
    time--;
    timerEl.textContent = "Time left: " + time;

    if (time === 0) {
      clearInterval(countingEl);
    }
  }, 1000);
}

function checkAnswers(event) {
  event.preventDefault();

  if (event.target.textContent === questions[questionIndex].answer) {
    feedback.textContent = "That's Right!";
    questionIndex++;
    if (questionIndex < questions.length) {
      runQuestions();
    } else {
      endQuiz();
    }
  } else {
    time = time - 10;
    feedback.textContent = "That's Wrong!";
    questionIndex++;
    if (questionIndex < questions.length) {
      runQuestions();
    } else {
      endQuiz();
    }
  }
}

function runQuestions() {
  let currentQuestion = questions[questionIndex];
  console.log(currentQuestion);

  qTitleEl.textContent = currentQuestion.title;

  button1.setAttribute("content", "1");
  button1.setAttribute("class", "button");
  button1.textContent = currentQuestion.choices[0];
  button1.addEventListener("click", checkAnswers);
  choices.appendChild(button1);

  button2.setAttribute("content", "2");
  button2.setAttribute("class", "button");
  button2.textContent = currentQuestion.choices[1];
  button2.addEventListener("click", checkAnswers);
  choices.appendChild(button2);

  button3.setAttribute("content", "1");
  button3.setAttribute("class", "button");
  button3.textContent = currentQuestion.choices[2];
  button3.addEventListener("click", checkAnswers);
  choices.appendChild(button3);

  button4.setAttribute("content", "1");
  button4.setAttribute("class", "button");
  button4.textContent = currentQuestion.choices[3];
  button4.addEventListener("click", checkAnswers);
  choices.appendChild(button4);
}

renderHighScore();
