// whats a variable
// a container that holds a value be it numbers, strings, boleans, arrays

// how to declare a variable
var var1 = 10; // not used anymore
const var2 = 20; // never changes
let var3;

/**
 What is the difference between "let", "const", and "var" in JavaScript?
"let" and "const" are block-scoped, meaning they only exist within the block of code they were defined in, while "var" is function-scoped. "let" allows reassignment of values, while "const" does not.

What is the difference between "==" and "===" operators in JavaScript?
"==" is a loose equality operator that compares values after converting their types if necessary, while "===" is a strict equality operator that compares values and types without conversion.
What is the "typeof" operator used for in JavaScript?
The "typeof" operator returns the data type of a variable or expression in JavaScript. For example:
 */
typeof 5; // returns "number"
typeof "hello"; // returns "string"

/*
What is the difference between null and undefined in JavaScript?
"null" represents a deliberate non-value, while "undefined" represents an unintentional absence of a value.
 */

let firstName = null;
console.log(typeof firstName);

let secondName = undefined;
console.log(typeof secondName);

// How do you concatenate two strings in JavaScript?
let string1 = "I was happy";
// let string2 = prompt("Enter message");
let string2 = "to see you";

let message = string1 + " " + string2;
console.log(message);
// How do you convert a string to a number in JavaScript?
let numberToString = "10";
let convertedNumber = Number(numberToString);
console.log(numberToString);
console.log(Number(typeof numberToString));
console.log(convertedNumber);
console.log(typeof convertedNumber);

// another way of doing so id using parseInt or parseFloat
let str = "20";
let conStr = parseInt(str);
console.log(typeof conStr);

// <----------intermediate-level questions---------->
// 1. Write a JavaScript function that takes two numbers as arguments and returns their sum.
function takeTwoNums(num1, num2) {
  return num1 + num2;
}
console.log(takeTwoNums(20, 40));
console.log(takeTwoNums(30, 70));

// 2. Write a JavaScript function that takes a string as an argument and returns its length.
const countStrings = (word) => {
  return word.length;
};
console.log(countStrings("My names is hussein"));

// 3. Write a JavaScript program that asks the user for their name and age, and then displays a message that says "Hello [name], you are [age] years old!".
const nameAndAge = (firstName, age) => {
  return `Hello ${firstName}, you are ${age} years old!`;
};
console.log(nameAndAge("Hussein", 23));

// 4. Write a JavaScript program that creates an array of numbers from 1 to 10, and then uses a loop to calculate and display the sum of those numbers.
let numbersArray = [];
for (i = 1; i <= 10; i++) {
  numbersArray.push(i);
}
let total = 0;
for (i = 1; i <= numbersArray.length; i++) {
  total += i;
}
console.log(numbersArray);
console.log(total);

// 5.Write a JavaScript program that uses a loop to display the even numbers between 1 and 20.
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 6. Write a JavaScript program that creates an object with three properties (name, age, and email), and then displays the values of those properties in the console.
const details = {
  name: "Hussein",
  age: 10,
  email: "user@email.com",
};
console.log(details.name);
console.log(details.age);
console.log(details.email);

// 7. Write a JavaScript program that uses the "Math.random()" function to generate a random number between 1 and 100, and then asks the user to guess that number. If the user's guess is too high or too low, the program should display a message to let them know.
// let userNumber = parseInt(prompt("Guess a number from 1 - 100"));
// console.log(typeof userNumber);
let userNumber = 10;
let guessedNumber = Math.trunc(Math.random() * 100);
console.log(guessedNumber);
if (userNumber === guessedNumber) {
  console.log(`You win!, the right number is ${guessedNumber}`);
} else if (userNumber > guessedNumber) {
  console.log("Too high");
} else {
  console.log("Too low");
}

// Control structures (if/else, switch):
// 1.Write a JavaScript program that checks whether a given number is even or odd, and displays a message to the user accordingly.
let number = 3456;
if (number % 2) {
  console.log(`${number} is odd`);
} else {
  console.log(`${number} is even`);
}

// 2. Write a JavaScript program that takes a string as input and reverses it. If the reversed string is the same as the original string, display a message indicating that the string is a palindrome.

const isPalindrome = (string) => {
  // convert to lowercase
  string.toLowerCase();
  let reversedString = string.split("").reverse().join("");
  if (reversedString === string) {
    console.log(`${string} is a palindrome`);
  } else {
    console.log(`${string} is not a palindrome`);
  }
  return reversedString;
};
console.log(isPalindrome("hussein"));
console.log(isPalindrome("racecar"));

// 3.Write a JavaScript program that takes a number as input and displays the name of the corresponding month. For example, if the input is 2, the program should display "February". Use a switch statement to implement this program.

const month = 5;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Enter a number between 1 and 4");
    break;
}

// 4. Write a JavaScript program that takes three numbers as input and displays the largest of the three numbers. Use an if/else statement to implement this program.
const largestNum = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest number`);
  } else {
    console.log(`${num3} is the largest number`);
  }
};
largestNum(2, 8, 14);
