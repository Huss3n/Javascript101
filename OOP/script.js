"use strict";

// class user {
//   constructor(userId, age, email) {
//     (this.userId = userId), (this.age = age), (this.email = email);
//   }
// }

// const mac2 = {
//   batterylife: 12,
//   screen: 14,
// };

// constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// calling the constructor function
let jonas = new Person("Hussein", 2010);
console.log(jonas);
// 1. a new empty {} is created
// 2. this is assigned to the {}
// 3. {} linked to a prototype
// 4. func automatically returns

const hussein = new Person("Jonas", 2012);
// prototypes -> add methods to the constructor function

// setting methods for the properties
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);
jonas.calcAge();
hussein.calcAge();

// setting vars for it
Person.prototype.species = "Homo sapiens";
console.log(jonas.species);

// check for property
console.log(jonas.hasOwnProperty("firstName")); // person has firstname
console.log(jonas.hasOwnProperty("species")); // person does not have species but prototype does
