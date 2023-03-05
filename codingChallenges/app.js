`use strict`;
// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };

/*
  // 1.
  for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);
  // 2.
  const odds = Object.values(game.odds);
  let average = 0;
  for (const odd of odds) average += odd;
  average /= odds.length;
  console.log(average);
  // 3.
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
  }
  // Odd of victory Bayern Munich: 1.33
  // Odd of draw: 3.25
  // Odd of victory Borrussia Dortmund: 6.5
  // BONUS
  // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   }
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1 create an array events of the different events that happened
const events = [...new Set(gameEvents.values())];
console.log(events);

//2 removing the yellow card event
gameEvents.delete(64);

//3
const x = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${x} minutes`);

// bonus .> grabing the last time in the game event
const time = [...gameEvents.keys()];
console.log(time);

console.log(
  `An event happened, on average, every ${
    time[time.length - 1] / gameEvents.size
  } minutes`
);

// looping over the events and marking as either first half or second
for ([min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} Half] ${min}: ${event}`);
}

// check string
const middleSeat = function (seat) {
  // B and E are the middle seats
  console.log(seat.slice(-1) === "B" ? "Middle seat" : "edge seat");
};

middleSeat("1h");

const announcement =
  "All passengers please come to boarding door 23. Boarding door 23";
console.log(announcement.replaceAll("door", "gate"));

// working with strings
const newName = "Hussein Aisak";
// add the two names in an array
const [first, last] = [newName.split(" ")];

const joined = ["mr.", first, last].join("");
console.log(joined);

const passenger = "jessica";

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("hussein aisak");

const message = "Go to gate 23";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log(passenger.padStart(12, "+").padEnd(20, "+"));

// mask credit card
const maskCreditCard = (card) => {
  const converted = card + "";
  const last = converted.slice(-4);
  return last.padStart(converted.length, "*");
};

console.log(maskCreditCard(23465782837472));
console.log(maskCreditCard("476266127632647"));

// repeat method
const repeatMessage = "Bad weather, flights have been cancelled";
console.log(repeatMessage.repeat(10));

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

// console.log("<------Coding challenge------->");
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   for (const [i, row] of rows.entries()) {
//     const [first, last] = row.toLowerCase().trim().split("_");
//     const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });
