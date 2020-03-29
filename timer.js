var theTimeTime = 5;
var questionTime;
var timerInterval;
var startButton = document.getElementById("start");



//countdown timer function

function timerTimer(){
questionTime = theTimeTime
timerInterval = setInterval(countdown, 1000)
countdown()
}

function countdown() {
  if (questionTime == 0) {
    // clearTimeout(timerInterval);
    clearInterval(timerInterval)
    return console.log("time's up!...TYLER!");
  } else {
    console.log(questionTime)
    questionTime--;
  }
}

startButton.onclick = function(){
    timerTimer();
}