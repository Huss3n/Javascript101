`use strict`;
// Write a function to reverse a number
function reverse(number) {
  var num = 0;
  while (number != 0) {
    num = num * 10;
    num = num + (number % 10);
    number = Math.trunc(number / 10); // remove the decimal places
  }
  return num;
}

function reverse(number) {
  var num = 0; // 0
  while (number != 0) {
    num = num * 10; // 0
    num = num + (number % 10); // (0 + (123 % 10) = 3)
    number = Math.trunc(number / 10); // (123 / 10) = 12
  }
  return num;
}
console.log(reverse(123));
console.log(reverse(456));
console.log(reverse(987));

// 2. Count number of Vowels in String
function vowel(string) {
  var num = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      num++; //Increment vowel count
    }
  }
  return num;
}
console.log(vowel("Academic Trial")); //6

// 3.  Write a function to check if an input string is a palindrome
function chechForPalindrome(input) {
  // convert the input to lowercase and remove non-alphanumeric characters
  input.toLowerCase().replace(/[W_]/g, "");
  // create a new string that is the reverse of the input string
  let reversedString = input.split("").reverse().join("");
  console.log(reversedString);
  // compare the reversed string to the input
  if (reversedString === input) {
    console.log(true);
  } else {
    console.log(false);
  }
}

console.log(chechForPalindrome("Hussein"));
console.log(chechForPalindrome("racecar"));

// 4. Write a function to calculate simple interest based on the principle amount
const calcInterest = (principle, rate, time) => {
  let calculated = principle + principle * rate * time;
  return calculated;
};

console.log(calcInterest(2000, 5, 2));

// 5. Write a function to generate a random number
const randomNum = () => {
  let num = Math.trunc(Math.random() * 10);
  return num;
};

console.log(randomNum());

// 6. Write a function to find Factorial of a number
function factorial(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// check prime number
function checkPrime(num, div = 2) {
  // Base case
  if (num <= 2) {
    return num == 2 ? true : false;
  }

  // No Divisor case
  if (div * div > num) {
    return true;
  }

  // Number is not prime if divisible
  if (num % div == 0) {
    return false;
  }
  // Recursive call with next divisor
  return checkPrime(num, div + 1);
}

console.log(checkPrime(56)); // false
console.log(checkPrime(89)); // true

// 8. Write a function to find the count of a letter in a string
function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter("Hello world", "o"));

// 10. Write a function to combine unlimited arrays
function combineArrays(...arrays) {
  return arrays.reduce((combined, array) => combined.concat(array), []);
}
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = [6];
var combined = combineArrays(arr1, arr2, arr3);
console.log(combined); // output: [1, 2, 3, 4, 5, 6]
