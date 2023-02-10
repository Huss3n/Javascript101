"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const array = [2, 5, 20, 50];
const [x, , y, z] = array;
console.log(x, y, z);

const [firstCat, secondCat, , fourthCat] = restaurant.categories;
console.log(firstCat, secondCat, fourthCat);

// receiving two return values using destructuring
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// what happens when we have a nasted array
const nested = [2, 4, [5, 6]];

const [w, , [q, e]] = nested;
console.log(w, q, e);

// setting default values
const [a = 1, b = 1, c = 1] = [3, 7];
console.log(a, b, c);
