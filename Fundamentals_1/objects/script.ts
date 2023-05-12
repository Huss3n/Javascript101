const obj = {
  name: "hussein",
  friends: ["abdulahi", "wyse", "muktar"],
  phone: "iP",
};

// the entries method
console.log(Object.entries(obj));
// output of entries
// [
//     [ 'name', 'hussein' ],
//     [ 'friends', [ 'abdulahi', 'wyse', 'muktar' ] ],
//     [ 'phone', 'iP' ]
//   ]

// .value method -> removes the keys
console.log(Object.values(obj)); // [ 'hussein', [ 'abdulahi', 'wyse', 'muktar' ], 'iP' ]

// the keys method -> removes the value and gets the keys
console.log(Object.keys(obj)); //[ 'name', 'friends', 'phone' ]
