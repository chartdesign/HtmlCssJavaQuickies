const buttonColors = ["red", "blue", "green", "yellow"];
const buttons = document.querySelectorAll(".btn");
let level = 0;
let gameStarted = false;
let userClickedPattern = [];
let = gamePattern = [];

function nextSequence() {
  userClickedPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  const pushedBtn = document.getElementById(`${randomChosenColor}`);

  gamePattern.push(randomChosenColor);

  animate(pushedBtn);

  playSound(randomChosenColor);
  level++;
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animate(userColor) {
  userColor.classList.add("pressed");
  setTimeout(function () {
    userColor.classList.remove("pressed");
  }, 300);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    const pushedBtn = document.getElementById(`${userChosenColor}`);

    animate(pushedBtn);

    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
}

document.addEventListener("keypress", function () {
  if (!gameStarted) {
    nextSequence();
    gameStarted = true;
  }
  document.querySelector("h1").innerHTML = `Level ${level}`;
});
// setInterval(nextSequence, 1000);
