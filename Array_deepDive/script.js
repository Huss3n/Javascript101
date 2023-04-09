"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// <----- SLICE METHOD ----->
let testArray = ["a", "b", "c", "d", "e", "f", "g"];
// the slice method
// its given an index as a position on where to start
// you can also define the end parameter for the end of the array
console.log(testArray.slice(2, 4));

// -1 is always the last item in an array
console.log(testArray.slice(-1));

console.log(testArray.slice(1, -2)); // leaves out the last two array items
// we can also use the slice method to create a shallow copy of an array
console.log(testArray.slice()); // without passing any arguments it will get all the items

// <----- SPLICE METHOD ----->
// splice actually mutates the array. It extracts the said items then after this deletes them from  the original array
console.log(testArray.splice(2, 3)); // 3 items after position 2 are removed
console.log(testArray);

// removing the last element
console.log(testArray.splice(-1));
console.log(testArray); // does not have the last element

//<------ REVERSE ------>
const arr2 = ["f", "e", "d", "c", "b", "a"];
console.log(arr2.reverse());
console.log(arr2); // reverse does mutate the original array

// <----- CONCAT ------>
const numbers = [1, 2, 4, 3, 5, 3, 9];
let mixed = testArray.concat(numbers); // does not mutate original array
console.log(mixed);

// <-----JOIN ----->
const joinedArray = mixed.join("-");
console.log(joinedArray);
