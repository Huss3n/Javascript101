`use strict`;

// default parameters
// 3 and 5 are default parameters
function numbers(num1 = 3, num2 = 5) {
  return num1 + num2;
}
// calling the function
// the second arg. is taken from the default parameter. these can over write the default values
// console.log(numbers(2));

// referencing
const flight = "LH234";
const hussein = {
  firstName: "hussein",
  passport: 2311244321,
};

function checkIn(flightNumber, passenger) {
  flightNumber = "LH123";
  passenger.firstName = "Mr." + passenger.firstName;
}

checkIn(flight, hussein);
console.log(flight);
console.log(hussein);

// passing by reference for arrays
let a = [2, 3, 4];
console.log(`a = ${a}`);
let b = a;
console.log(`b = ${b}`);
b.push(10);

console.log("<------After pushing------>");
console.log(`a = ${a}`);
console.log(`b = ${b}`);
