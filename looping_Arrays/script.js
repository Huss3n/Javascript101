`use strict`;

// for of loop
const restaurant = {
  name: "pizzaHouse",
  location: "inYou",
  openingHours: ["mon", "tue", "wed", "thur", "fri"],
  menu: [
    "periperi",
    "hawain",
    "vegi",
    "gnocci",
    "lasagna",
    "fruit pie",
    "caramel",
  ],
  drinks: ["pepsi", "coke", "getorade", "water"],
  order: function (indexAt) {
    return `order of ${indexAt} has been received`;
  },
  orderPasta: function (ing) {
    return `Here is your pasta with ${this.menu[0]} ingridients`;
  },
};

const menuArray = [...restaurant.menu, ...restaurant.drinks];

//looping through the array
for (item of menuArray) console.log(item);

// for (i = 0; i <= menuArray.length; i++) {
//   console.log(i);
// }

// getting the index of the elemnt in the array
for (item of menuArray.entries()) {
  console.log(item);
}

// using destructuring to loop over the arrays
for (const [i, el] of menuArray.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// enhanced object literals
// change function name by just removing the function keyword

// optional chaining
console.log(restaurant.openingHours?.sat);

// methods
console.log(restaurant?.car ?? "Method not found");

//arrays
const users = [{ firstName: "Hussein", email: "hello@hussein.io" }];

console.log(users[0]?.firstName ?? "User not found");

const game = {
  team1: "Bayern",
  team2: "bvb",
  players: [
    [
      "Never",
      "Pavard",
      "Martiniz",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretza",
      "Coman",
      "Muller",
      "Gnaby",
      "Lewandoski",
    ],
    [
      "Burki",
      "schools",
      "Hakimi",
      "Himels",
      "weigl",
      "witsel",
      "havard",
      "brant",
      "sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandoski", "Gnaby", "Lewandoski", "hummels"],
  date: "Nov 19th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//   for (const [i, el] of menuArray.entries()) {
//     console.log(`${i + 1}: ${el}`);
//   }

console.log("<------Coding challenge----->");
// looping through goals array
for (const [goalNumber, scorer] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${scorer}`);
}

// calculate the average odd
// const {[win, x, lose]} = game.odds;
const win = game.odds.team1;
const draw = game.odds.x;
const win2 = game.odds.team2;

console.log(`average odd is ${(win + draw + win2) / 3}`);
