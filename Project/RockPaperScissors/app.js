const player1 = document.getElementById("playerText");
const player2 = document.getElementById("computerText");
const choiceButtons = document.querySelector(".choiceButton");

const computerChoice = ["Rock", "Paper", "Scissors"];
let index = Math.trunc(Math.random() * 2) + 1;
console.log(index);
