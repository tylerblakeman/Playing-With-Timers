var theTimeTime = 5;
var theIntervalInterval = setInterval(countdown, 1000)
var questionTime;
var timerInterval;
var startButton = document.getElementById("start");



//countdown timer function

function timerTimer(){
questionTime = theTimeTime
timerInterval = theIntervalInterval
countdown()
}

function countdown() {
  if (questionTime == 0) {
    // clearTimeout(timerInterval);
    console.log("time's up!");
    clearInterval(theIntervalInterval)
  } else {
    questionTime--;
    console.log(questionTime)
  }
}

startButton.onclick = function(){
    timerTimer();
}