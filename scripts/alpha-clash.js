// function play() {
//   document.getElementById("home").classList.add("hidden");
//   document.getElementById("play-ground").classList.remove("hidden");
// }

function continueGame() {
  const alphabet = getRandomAlphabet();
  console.log("random alphabet", alphabet);

  document.getElementById("current-alphabet").innerText = alphabet;

  setBgColById(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("play-ground");
  continueGame();
}
