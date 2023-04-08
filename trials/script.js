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
