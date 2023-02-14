"use strict";

// can be used to expand an array into all its elements

const arr = [2, 4, 5, 6, 20];
const newarr = [12, 14, arr[0], arr[1], arr[2]];
console.log(newarr);

const brandNew = [12, 45, 60, ...arr];
// logging individual elements
console.log(...brandNew);

const restaurant = {
  name: "pizzaHouse",
  location: "inYou",
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

// builds a new array from scratch by expanding the new array
// helps getting elements out of the array
// can only be used in places where we are writing values separated by commas

const newMenu = [...restaurant.menu, "Rice"];
console.log(newMenu);

// copying the array
const copyArray = [...newMenu];
console.log(copyArray);

// joining two arrays
const joinedArray = [...restaurant.menu, ...restaurant.drinks];
console.log(joinedArray);

// spread operator works on all iterables i.e strings, arrays, maps and sets but not objects

// using it on a string
const firstName = "hussein";
const letters = [...firstName, "", "S"];
console.log(letters);
console.log(...letters);

const ingridients = [
  prompt("Let's make pasta, ingridient 1: ?"),
  prompt("ingridient 2: ?"),
  prompt("ingridient 3: ?"),
];

restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
// restaurant.orderPasta(...ingridients);
console.log(restaurant.orderPasta);
// console.log(ingridients);

// coding challenge

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

const [players1, players2] = game.players;
// console.log(players1, players2);

// gk name and the rest
const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper);

// field players
// const fieldPlayers = [...players1];
console.log(fieldPlayers);

// all players
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// players1 final
const players1final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1final);

// variable for each odds
const team1win = game.odds.team1;
const draw = game.odds.x;
const team2win = game.odds.team2;
console.log(team1win);
console.log(draw);
console.log(team2win);

function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals("Goretza", "Coman", "Muller", "Gnaby", "Lewandoski");
printGoals("Goretza", "Lewandoski");

team1win < team2win && console.log("Team one is likely to win");
team1win > team2win && console.log("Team two is likely to win");
