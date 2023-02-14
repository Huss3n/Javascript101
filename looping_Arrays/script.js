`use strict`;

// for of loop
const restaurant = {
  name: "pizzaHouse",
  location: "inYou",
  openingHours: ["mon", "tue", "wed", "thur", "fri"],
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
  orderPasta: function (ing) {
    return `Here is your pasta with ${this.menu[0]} ingridients`;
  },
};

const menuArray = [...restaurant.menu, ...restaurant.drinks];

//looping through the array
for (item of menuArray) console.log(item);

// for (i = 0; i <= menuArray.length; i++) {
//   console.log(i);
// }

// getting the index of the elemnt in the array
for (item of menuArray.entries()) {
  console.log(item);
}

// using destructuring to loop over the arrays
for (const [i, el] of menuArray.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// enhanced object literals
// change function name by just removing the function keyword

// optional chaining
console.log(restaurant.openingHours?.sat);

// methods
console.log(restaurant?.car ?? "Method not found");

//arrays
const users = [{ firstName: "Hussein", email: "hello@hussein.io" }];

console.log(users[0]?.firstName ?? "User not found");
