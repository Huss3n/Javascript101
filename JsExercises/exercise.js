// Write a function to reverse a number
`use strict`;

const reverse = (number) => {
  var num = 0;
  while (num != 0) {
    num = num * 10;
    num = num + (number % 10);
    number = Math.trunc(number / 10); // remove the decimal places
  }
  return num;
};

console.log(reverse(123));
