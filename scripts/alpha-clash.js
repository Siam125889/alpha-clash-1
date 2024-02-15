// function play() {
//   document.getElementById("home").classList.add("hidden");
//   document.getElementById("play-ground").classList.remove("hidden");
// }

function handleKbdKeyUpEvent(event) {
  const playerPressed = event.key;
  // console.log("pressed", playerPressed);

  if (playerPressed === "Escape") {
    gameOver();
  }

  const currentAlphabet = document.getElementById("current-alphabet").innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // check matched
  if (playerPressed === expectedAlphabet) {
    console.log("point");

    const currentScore = getTextElementValueById("current-score");
    console.log(currentScore);
    const updatedScore = currentScore + 1;

    setTextElementValueById("current-score", updatedScore);

    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log("cu sc", currentScore);

    // const newScore = currentScore + 1;

    // currentScoreElement.innerText = newScore;

    removeBgColById(expectedAlphabet);
    continueGame();
  } else {
    console.log("lost a life");

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // console.log("cu sc", currentLife);

    // const newLife = currentLife - 1;

    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKbdKeyUpEvent);
function continueGame() {
  const alphabet = getRandomAlphabet();
  // console.log("random alphabet", alphabet);

  document.getElementById("current-alphabet").innerText = alphabet;

  setBgColById(alphabet);
}

function play() {
  hideElementById("home");
  hideElementById("final-score");
  showElementById("play-ground");

  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  removeBgColById(currentAlphabet);
}
