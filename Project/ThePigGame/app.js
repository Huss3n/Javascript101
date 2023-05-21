// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const firstPlayer = document.querySelector(".player--0");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

// // const playerOneDisplay = document.getElementById("score--0");
// // const playerOneScore = document.getElementById("current--0");
// // const rollButton = document.querySelector(".btn--roll");
// // const holdButton = document.querySelector(".btn--hold");
// // const newGameButton = document.querySelector(".btn--new");
// // const displayDice = document.querySelector(".dice");
// // let currentUserScore = 0;
// // let totalScore = 0;

// // // function that resets everything
// // function reset() {
// //   displayDice.classList.add("hidden");
// //   playerOneDisplay.textContent = 0;
// //   playerOneScore.textContent = 0;
// //   currentUserScore = 0;
// // }
// // // hide the dice before the game starts and set scores to zero
// // displayDice.classList.add("hidden");
// // playerOneDisplay.textContent = 0;

// // rollButton.addEventListener("click", function () {
// //   // get a random dice and display
// //   const randomDice = Math.trunc(Math.random() * 6) + 1;
// //   displayDice.classList.remove("hidden");
// //   displayDice.src = `dice-${randomDice}.png`;
// //   console.log(randomDice);

// //   // use random dice for calculations
// //   // check whether the dice rolls to one
// //   if (randomDice !== 1) {
// //     // add the random dice to the random score
// //     currentUserScore += randomDice;
// //     playerOneScore.textContent = currentUserScore;
// //   } else {
// //     currentUserScore = 0;
// //     playerOneScore.textContent = currentUserScore;
// //   }
// // });

// // // when hold button is clicked
// // // 1 add the total score to the above score
// // // 2 reset the current score to 0

// // holdButton.addEventListener("click", function () {
// //   playerOneDisplay.textContent = totalScore += currentUserScore;
// //   playerOneScore.textContent = 0;
// // });

// // // resets the game
// // newGameButton.addEventListener("click", reset);

const colors = [
  {
    id: 1,
    white: "white",
  },
  {
    id: 2,
    blue: "blue",
  },
  {
    id: 3,
    red: "red",
  },
  {
    id: 4,
    green: "green",
  },
  {
    id: 5,
    black: "black",
  },
];
import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <>
      <div>
        <h1>Heading one</h1>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
