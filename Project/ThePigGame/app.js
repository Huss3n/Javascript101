"use strict";
// selecting elements
const scrore0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceImage = document.querySelector(".dice");
const holdButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");
const rollButton = document.querySelector(".btn--roll");
scrore0El.textContent = 0;
score1El.textContent = 0;
const scoreLevel0 = document.getElementById("current--0");
const scoreLevel1 = document.getElementById("current--1");
let currentScore = 0;

// hiding the dice when beginning
diceImage.classList.add("hidden");

// when the roll button gets pressed
rollButton.addEventListener("click", function () {
  console.log("Roll button presses");
  // we need to generate a random dice roll
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDice);
  // display the generated dice
  diceImage.classList.remove("hidden");
  diceImage.src = `dice-${randomDice}.png`;
  // check if the rolled is 1 and if true
  if (randomDice !== 1) {
    // add the dice to the current score
    scrore0El.textContent = randomDice;
    // scoreLevel0.textContent = randomDice;
    currentScore = currentScore + randomDice;
  } else {
    // reset the score and switxh to next player
    score1El.textContent = 0;
  }
});
