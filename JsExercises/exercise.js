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

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
 */
function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (alphabet.indexOf(char) !== -1) {
      result += alphabet.indexOf(char) + 1 + " ";
    }
  }

  return result.trim();
}

/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation) */
function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    let sum = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
}

console.log(getSum(2, 4));

/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop. */
function countPassengers(stops) {
  let total = 0;
  for (let i = 0; i < stops.length; i++) {
    total += stops[i][0];
    total -= stops[i][1];
  }
  return total;
}

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4. */

function binaryArrayToNumber(arr) {
  return arr.reduce((acc, curr, index) => {
    return acc + curr * Math.pow(2, arr.length - index - 1);
  }, 0);
}

/*
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false. */

function periodIsLate(last, today, cycleLength) {
  const oneDay = 24 * 60 * 60 * 1000; // number of milliseconds in one day
  const daysPassed = Math.round(Math.abs((last - today) / oneDay));
  return daysPassed > cycleLength;
}

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

/*
:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */
function digital_root(n) {
  // If the number has only one digit, return it
  if (n < 10) {
    return n;
  }

  // Otherwise, sum the digits and call the function recursively
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return digital_root(sum);
}

/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000) // should return "M"
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row. */
const romanNumerals = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];
let result = "";
let i = 0;
while (number > 0) {
  if (number >= romanNumerals[i][0]) {
    result += romanNumerals[i][1];
    number -= romanNumerals[i][0];
  } else {
    i++;
  }
}
return result;

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */
function openOrSenior(data) {
  return data.map((member) => {
    if (member[0] >= 55 && member[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}

/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

function sumOfNthRow(n) {
  let sum = 0;
  let start = 1 + 2 * (((n - 1) * n) / 2); // formula to calculate the starting number of the nth row
  for (let i = 0; i < n; i++) {
    sum += start + 2 * i;
  }
  return sum;
}

// Example usage
console.log(sumOfNthRow(1)); // Output: 1
console.log(sumOfNthRow(2)); // Output: 8
console.log(sumOfNthRow(3)); // Output: 24

/**
 Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */
function moveZeros(arr) {
  let nonZeros = [];
  let zeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }
  return nonZeros.concat(zeros);
}

// Example usage
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // Output: [false,1,1,2,1,3,"a",0,0]

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test" */

function spinWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}

/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required. */
function queueTime(customers, n) {
  let tills = Array(n).fill(0); // initialize an array with n elements all set to 0
  for (let i = 0; i < customers.length; i++) {
    let nextCustomer = customers[i];
    let nextTill = tills.indexOf(Math.min(...tills)); // find the till with the shortest queue
    tills[nextTill] += nextCustomer; // add the next customer's checkout time to the shortest queue
  }
  return Math.max(...tills); // return the longest queue time
}

// Example usage
console.log(queueTime([5, 3, 4], 1)); // Output: 12
console.log(queueTime([10, 2, 3, 3], 2)); // Output: 10
console.log(queueTime([2, 3, 10], 2)); // Output: 12

/*
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. 
Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
*/
function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return result;
}
