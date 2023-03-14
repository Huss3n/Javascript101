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

// 11. Write a function to add unlimited numbers
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
var sum = addNumbers(1, 2, 3, 4, 5);
console.log(sum); // output: 15

// 11. Write a function to calculate compound interest based on the principle amount
function calculateCompoundInterest(principal, rate, years) {
  var n = 12; // number of times interest is compounded per year
  var r = rate / n; // interest rate per compounding period
  var t = years * n; // total number of compounding periods
  var amount = principal * (1 + r) ** t; // final amount after compound interest
  return amount;
}

console.log(calculateCompoundInterest(1000, 0.05, 5));

// 12 . Flatten array of arrays using JavaScript reduce
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
var arr = [1, [2, [3, 4], 5], 6];
var flattened = flattenArray(arr);
console.log(flattened); // output: [1, 2, 3, 4, 5, 6]

/* 13
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/
const tellFortune = (numberOfChildren, patnersName, geolocation, jobTitle) => {
  let output = `You will be a ${jobTitle} in ${geolocation} and married to ${patnersName} with ${numberOfChildren} kids`;
  return output;
};
console.log(tellFortune(2, "Amie", "New York", "programmer"));
console.log(tellFortune(1, "Lucy", "London", "actor"));

// 14.  Write a function `lengths` that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function lengths(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }
  return result;
}

var arr = ["apple", "banana", "cherry", "date"];
var result = lengths(arr);
console.log(result); // output: [5, 6, 6, 4]

// 15. Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
function hasSeven(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString().indexOf("7") !== -1) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [7, 8, 9];
var arr3 = [7, 10, 77, 80];

console.log(hasSeven(arr1)); // output: "there is no 7 in the array"
console.log(hasSeven(arr2)); // output: "Boom!"
console.log(hasSeven(arr3)); // output: "Boom!"

// 16. Boomerang
function countBoomerangs(arr) {
  var count = 0;
  for (var i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}
var arr1 = [1, 2, 1, 2, 1, 2, 3];
var arr2 = [5, 6, 6, 7, 6, 3, 9];
var arr3 = [9, 9, 9, 9, 9, 9, 9];

console.log(countBoomerangs(arr1)); // output: 4
console.log(countBoomerangs(arr2)); // output: 1
console.log(countBoomerangs(arr3)); // output: 0

// Given is an array numbers. Return the number of odd numbers.
function countOddNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      count++;
    }
  }
  return count;
}

console.log(countOddNumbers(2, 3, 12, 89, 23, 12, 4, 6, 8)); // output = 3

// Given is a word word. Run through the word and merge every second letter into a new word.
function mergeEverySecondLetter(word) {
  var mergedWord = "";
  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      mergedWord += word[i];
    }
  }
  return mergedWord;
}

/**
 Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).
The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.
If no end year is given, only return friday the thirteenths during the start year.
 */
function fridayTheThirteenths(startYear, endYear) {
  if (endYear === undefined) {
    endYear = startYear;
  }
  var dates = [];
  for (var year = startYear; year <= endYear; year++) {
    for (var month = 1; month <= 12; month++) {
      var date = new Date(year, month - 1, 13);
      if (date.getDay() === 5) {
        var monthStr = month.toString();
        if (monthStr.length === 1) {
          monthStr = "0" + monthStr;
        }
        dates.push(monthStr + "/13/" + year);
      }
    }
  }
  return dates.join(" ");
}
console.log(fridayTheThirteenths(1999, 2000));
