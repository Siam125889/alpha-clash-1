function hideElementById(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}
function showElementById(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function setBgColById(elementId) {
  document.getElementById(elementId).classList.add("bg-orange-400");
}
function removeBgColById(elementId) {
  document.getElementById(elementId).classList.remove("bg-orange-400");
}

function getRandomAlphabet() {
  const alphaString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphaString.split("");
  //   console.log(alphabets);

  const index = Math.round(Math.random() * 25);

  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}
