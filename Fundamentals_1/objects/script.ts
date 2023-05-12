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

// destructurinng -> like a spread opearator but for easy adds and assigns
let p, r, others;
[p, r, ...others] = [12, 34, 23, 34324, 54, 24, 43, 24, 34];

console.log(others); // output
//     23, 34324, 54,
//     24,    43, 24,
//     34
//   ]
