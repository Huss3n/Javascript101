`use strict`;

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
