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

// need to work on consistency
