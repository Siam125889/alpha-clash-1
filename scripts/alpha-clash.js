// function play() {
//   document.getElementById("home").classList.add("hidden");
//   document.getElementById("play-ground").classList.remove("hidden");
// }

function handleKbdKeyUpEvent(event) {
  const playerPressed = event.key;
  // console.log("pressed", playerPressed);

  const currentAlphabet = document.getElementById("current-alphabet").innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // check matched
  if (playerPressed === expectedAlphabet) {
    console.log("point");

    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log("cu sc", currentScore);

    const newScore = currentScore + 1;

    currentScoreElement.innerText = newScore;

    removeBgColById(expectedAlphabet);
    continueGame();
  } else {
    console.log("lost a life");

    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    console.log("cu sc", currentLife);

    const newLife = currentLife - 1;

    currentLifeElement.innerText = newLife;
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
  showElementById("play-ground");
  continueGame();
}
