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
