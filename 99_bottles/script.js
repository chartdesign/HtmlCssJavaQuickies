let numOfBottles = 9;
const countdownInterval = setInterval(() => {
  if (numOfBottles <= -1) {
    clearInterval(countdownInterval);
    document.getElementById("beers").innerHTML =
      "Beers All gone! Time for a store run";
  } else {
    document.getElementById("bottles").innerHTML = numOfBottles;
    numOfBottles--;
  }
}, 1000);
