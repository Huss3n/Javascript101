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
