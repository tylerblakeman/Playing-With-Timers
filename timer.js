var questionTime;
var timerInterval;
var startButton = document.getElementById("start");

//countdown timer function

function timer(){
questionTime = 5;
timerInterval = setInterval(countdown, 1000)
countdown()
}

//countdown timer function
function countdown() {
  if (questionTime == 0) {
    clearInterval(timerInterval)
    return console.log("time's up!...TYLER!");
  } else {
    console.log(questionTime)
    questionTime--;
  }
}

//start button triggering 
startButton.onclick = function(){
    timer();
}