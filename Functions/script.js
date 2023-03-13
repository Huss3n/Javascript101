// `use strict`;

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
    console.log(
      `${name} booked a flight with ${this.airline} ${this.iatacode} airline flight number ${flightNum}`
    );
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
document
  .querySelector(".buy")
  .addEventListener("click", delta.buyplanes.bind(delta));
