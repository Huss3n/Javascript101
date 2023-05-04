"use strict";

// array methods
// Write a JavaScript function to check whether an `input` is an array or not. -> car
const arr1 = ["aisak", "hussein", "muktar", "20", "car"];

// find method
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const newArr = arr1.find(function (isIn) {
  return isIn === "car";
});
console.log(newArr);

// includes does not need a callback function and returns a bolean
const anotherArr = arr1.includes("car");
console.log(arr1.includes("car"));
// console.log(anotherArr);

// indexOf
// it does not need a callback function
console.log(arr1.indexOf("hussein"));

// slice method -> creates a new array with the selected conditions
const animals = ["ant", "bison", "camel", "duck", "elephant"];
const newAnimals = animals.slice(1, 4);
console.log(newAnimals);

// reverse method -> reverse the array
const reversed = animals.reverse();
console.log(reversed);

// filter method -> creates a shallow copy of array with the specified conditions
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// filter with word legnth
const updatedWords = words.filter(function (word) {
  return word.length > 6;
});
console.log(updatedWords);

// map method ->  creates a new array with the conditions

const array1 = [1, 4, 9, 16];
const array2 = array1.map(function (num) {
  return num * 3;
});
console.log(array2);

// map with comparison operators returns a boolean
const array3 = words.map(function (word) {
  return word.length > 5;
});
console.log(array3);

// forEach method -> loops through the array and returns a new array with the specified conditions
// The forEach() method executes a provided function once for each array element.
const letters = ["a", "b", "c", "d", "e", "f", "g"];
const letters1 = letters.forEach((letter) => {
  console.log(letter);
});

const firstLetter = letters.shift();
console.log("first " + firstLetter);
console.log(letters.indexOf("c"));

// some method
/*
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
*/

const testNum = [23, 40, 34, 23, 87, 90, 23, 29, 38, 48];
const evenArray = testNum.some((num) => num % 2 === 0);
const mapBool = testNum.map((num) => num > 12); // returns boolean
const mapNum = testNum.map((num) => num + 12); // returns elements
const filterNum = testNum.filter((num) => num > 40);
console.log(filterNum);
console.log(mapNum);
console.log(evenArray);

// reduce method
/*
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/

const addNum = [12, 34, 211, 45, 23, 45];
const reduceNum = addNum.reduce((num, total) => {
  return num + total;
}, 4);
console.log(reduceNum);

// concat method
/*
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*/
const cars = ["toyota", "vw", "mercedes"];
const cars1 = ["nissan", "hyundai", "volvo"];
const combined = cars.concat(cars1);
console.log(combined);

// every method
/*
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/

isAbove40 = (num) => num > 40;

console.log(addNum.every(isAbove40)); // returns a boolean

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(""));
