"use strict";

// can be used to expand an array into all its elements

const arr = [2, 4, 5, 6, 20];
const newarr = [12, 14, arr[0], arr[1], arr[2]];
console.log(newarr);

const brandNew = [12, 45, 60, ...arr];
console.log(brandNew);
