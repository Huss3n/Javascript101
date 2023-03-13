`use strict`;

// // default parameters
// // 3 and 5 are default parameters
// function numbers(num1 = 3, num2 = 5) {
//   return num1 + num2;
// }
// // calling the function
// // the second arg. is taken from the default parameter. these can over write the default values
// // console.log(numbers(2));

// // referencing
// const flight = "LH234";
// const hussein = {
//   firstName: "hussein",
//   passport: 2311244321,
// };

// function checkIn(flightNumber, passenger) {
//   flightNumber = "LH123";
//   passenger.firstName = "Mr." + passenger.firstName;
// }

// checkIn(flight, hussein);
// console.log(flight);
// console.log(hussein);

// // passing by reference for arrays
// let a = [2, 3, 4];
// console.log(`a = ${a}`);
// let b = a;
// console.log(`b = ${b}`);
// b.push(10);

// console.log("<------After pushing------>");
// console.log(`a = ${a}`);
// console.log(`b = ${b}`);

//
const a = 10;
const b = 20;
const c = b;

console.log(`a ${a}`);
console.log(`b ${b}`);
console.log(`c ${c}`);

// array
const numbers = [1, 2, 3];
numbers.push(100);
// [1, 2, 3, 4]
console.log(`numbers: ${numbers}`);

const num2 = numbers;
num2.push(100);
console.log(`num2: ${num2}`);

// [1, 2, 3, 4, 100]

// return a function fro another function
// function are methods hence we can call them on functions
// bind methods

// <<----- High order functions ------>>
// a function that receives another function as an argument, retuns a new function or both
// possible because of first class functions

const oneWord = function (str) {
  return str.replace(/ /g, ""), toLoweCase();
};

const upperFirstWord = function (str) {
  return ([first, ...others] = str.split(""));
  return;
  [first.toUpperCase(), ...others].join("");
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Transformed string ${fn(str)}`);
};
transformer("Js is the best!", upperFirstWord);

// call back functions

// functions returning functions
function greet(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}
const sayHey = greet("Hey");
sayHey("Hussein");
sayHey("Jonas");

// <--- or call it directly --->

greet("Hello")("Aisak");

// <---- Using arrow functions ---->
let myFunc = (greeting) => {
  let greet = (name) => {
    console.log(`${greeting} ${name}`);
  };
  return greet;
};

myFunc("Good day")("Ibrahim");

// THE CALL AND APPLY METHOD
const delta = {
  airline: "Delta",
  iatacode: "DE",
  bookings: [],
  planes: [],
  // book : function(){

  // }
  book(flightNum, name) {
    console.log(`${name} booked a flight with ${this.airline} ${this.iatacode} airline flight number ${flightNum}`);
    this.bookings.push({
      flight: `${name}, ${this.iatacode}${flightNum}`,
    });
  },
};

delta.book(245, "Hussein");
console.log(delta.bookings);
delta.book(532, "Aisak");
delta.book(129, "Muktar");
console.log(delta.bookings);

// create a book function outside to be used by the other airline
const book = delta.book;

// create another airline
const southWest = {
  airline: "southwest",
  iatacode: "SW",
  bookings: [],
};

// <------ CALL Method ----->
console.log(" <------ CALL Method ----->");
// using a method on a function
// seting the this keyword from undefined to the needed airline
book.call(southWest, 231, "Sarah");
console.log(southWest.bookings);

book.call(delta, 835, "Wyse");
console.log(delta.bookings);

//<------ APPLY Method ------>
console.log("<------ APPLY Method ------>");
// apply method is similar to the call method but does not receive arguments after the this keyword

const luftansa = {
  airline: "Luftansa",
  iatacode: "LE",
  bookings: [],
};

const flightData = [354, "John Smith"];
book.apply(luftansa, flightData);
console.log(luftansa.bookings);

// using spread operator
const newData = [234, "Indiana Jones"];
book.call(luftansa, ...newData);
console.log(luftansa.bookings);

//<----THE BIND METHOD ----->
console.log("<----THE BIND METHOD ----->");

// setting the this keyword in stone
const bookSO = book.bind(southWest);
const bookLu = book.bind(luftansa);
const bookDe = book.bind(delta);
bookSO(236, "Jonas S");
console.log(southWest.bookings);

// with event listeners
delta.planes = 300;
delta.buyplanes = function () {
  this.planes++;
  console.log(this.planes);
};
// console.log(delta.plnaes);
document.querySelector(".buy").addEventListener("click", delta.buyplanes.bind(delta));

// presetting an argument
const addTax = (rate, value) => value + value * (rate / 100);

const addVAT = addTax.bind(null, 23);
console.log(addVAT(200));
console.log(addVAT(500));
console.log(addVAT(4500));

const tax = (rate) => {
  return function (value) {
    return value + value * (rate / 100);
  };
  // return calc;
};

console.log(tax(20)(200));

// <----- CODING CHALLENGE ----->
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/

const poll = {
  question: "What is your fav coding language",
  options: ["0: js", "1: Java", "2: C#", "3: Python"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(prompt(`${this.question}\n ${this.options.join("\n")}\n (write option number)`));
    console.log(answer);
    // add answer
    // if (answer === typeof "number" && answer < this.answers.length) {
    //   this.answers[answer]++;
    //   console.log(this.answers);
    // }
    typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;
    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if ((type = "string")) {
      console.log(`Poll results = ${this.answers.join(",")}`);
    }
  },
};

// document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer);
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

// bonus
poll.displayResult.call({ answers: [5, 2, 3] }, "string");
