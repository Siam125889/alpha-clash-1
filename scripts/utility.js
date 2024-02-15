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

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const text = document.getElementById(elementId).innerText;
  return text;
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
