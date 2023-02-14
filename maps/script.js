`use strict`;
// more important than maps

const rest = new Map();

// adding items in the map
rest.set("name", "Classico Italiano");
rest.set(1, "Italy");
rest.set(2, "France");

console.log(rest);

// you can chain the items
rest
  .set("menu", ["rice", "cake", "pizza", "chicken"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
console.log(rest);

// reading items in a map
console.log(rest.get("menu"));
console.log(rest.get(true));

// compare the times
const time = 21;
console.log(rest.get(time < rest.get("open") && time > rest.get("close")));

console.log("<---------- Quiz-------->");
// looping over sets
const question = new Map([
  ["question", "Which is the best programming language? "],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);

console.log(question.get("question"));

for ([keys, values] of question) {
  if (typeof keys === "number") console.log(`Answer ${keys}: ${values}`);
}

const answer = Number(prompt("Your answer"));

if (answer === question.get("correct")) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
