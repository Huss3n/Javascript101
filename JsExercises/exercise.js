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

/**
 The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
 */
function generateHashtag(str) {
  if (str.trim() === "") return false;

  const words = str.split(" ");
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  const hashtag = "#" + capitalizedWords.join("");

  return hashtag.length <= 140 ? hashtag : false;
}

/*
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0" */
function int32ToIp(int32) {
  // Convert the integer to binary and pad with leading zeros
  const binary = int32.toString(2).padStart(32, "0");

  // Split the binary string into 4 octets of 8 bits each
  const octets = [binary.slice(0, 8), binary.slice(8, 16), binary.slice(16, 24), binary.slice(24)];

  // Convert each octet from binary to decimal
  const decimals = octets.map((octet) => parseInt(octet, 2));

  // Join the decimal values with dots to form the IPv4 address string
  return decimals.join(".");
}

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */
function rot13(message) {
  let ciphered = "";
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char >= "a" && char <= "z") {
      ciphered += String.fromCharCode(((char.charCodeAt(0) - "a".charCodeAt(0) + 13) % 26) + "a".charCodeAt(0));
    } else if (char >= "A" && char <= "Z") {
      ciphered += String.fromCharCode(((char.charCodeAt(0) - "A".charCodeAt(0) + 13) % 26) + "A".charCodeAt(0));
    } else {
      ciphered += char;
    }
  }
  return ciphered;
}

/*
DESCRIPTION:
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Note:
You can see examples for your language in "Sample Tests". */
function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) {
    [a, b] = [b, a + b];
  }
  return [a, b, a * b === prod];
}

/*
DESCRIPTION:
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});  */
function cakes(recipe, available) {
  let maxCakes = Infinity;
  for (let ingredient in recipe) {
    if (!(ingredient in available)) {
      return 0;
    }
    maxCakes = Math.min(maxCakes, Math.floor(available[ingredient] / recipe[ingredient]));
  }
  return maxCakes;
}

/*
DESCRIPTION:
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you! */
function getPINs(observed) {
  const adjacentDigits = {
    0: ["0", "8"],
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["5", "7", "8", "9", "0"],
    9: ["6", "8", "9"],
  };

  const variations = [""];

  for (let i = 0; i < observed.length; i++) {
    const currentDigits = adjacentDigits[observed[i]];
    const newVariations = [];

    for (let j = 0; j < variations.length; j++) {
      for (let k = 0; k < currentDigits.length; k++) {
        newVariations.push(variations[j] + currentDigits[k]);
      }
    }

    variations.length = 0;
    variations.push(...newVariations);
  }

  return variations;
}

/*
DESCRIPTION:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 */
function validParentheses(parens) {
  let stack = [];
  for (let i = 0; i < parens.length; i++) {
    let char = parens[i];
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

/*
DESCRIPTION:
Given an array of positive or negative integers

 I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings. */
function sumOfDivided(lst) {
  let primes = {};

  // A helper function to check if a number is prime
  function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Loop through each number in the input array
  for (let i = 0; i < lst.length; i++) {
    let num = lst[i];
    let absNum = Math.abs(num);

    // Loop through each possible prime factor of the number
    for (let j = 2; j <= absNum; j++) {
      if (isPrime(j) && absNum % j === 0) {
        // If the factor is prime and divides the number, add it to the primes object
        if (!primes[j]) {
          primes[j] = 0;
        }
        primes[j] += num;
      }
    }
  }

  // Convert the primes object to an array and sort by prime number
  let result = [];
  for (let prime in primes) {
    result.push([parseInt(prime), primes[prime]]);
  }
  result.sort((a, b) => a[0] - b[0]);

  return result;
}

/**
 DESCRIPTION:
Lyrics...
Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3
Here comes the task...
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.
By the way...
My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.
 */

function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}

/**
 DESCRIPTION:
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]
Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words.
 */

function topThreeWords(text) {
  // Replace all non-alphanumeric characters with whitespace
  let words = text
    .replace(/[^\w']/g, " ")
    .toLowerCase()
    .split(" ");

  let count = {};
  for (let word of words) {
    if (word !== "") {
      count[word] = (count[word] || 0) + 1;
    }
  }

  let sortedWords = Object.keys(count).sort((a, b) => count[b] - count[a]);

  return sortedWords.slice(0, 3);
}

/*
Esoteric languages are pretty hard to program, but it's fairly interesting to write interpreters for them!

Your task is to write a method which will interpret Befunge-93 code! Befunge-93 is a language in which the code is presented not as a series of instructions, but as instructions scattered on a 2D plane; your pointer starts at the top-left corner and defaults to moving right through the code. Note that the instruction pointer wraps around the screen! There is a singular stack which we will assume is unbounded and only contain integers. While Befunge-93 code is supposed to be restricted to 80x25, you need not be concerned with code size. Befunge-93 supports the following instructions (from Wikipedia):

0-9 Push this number onto the stack.
+ Addition: Pop a and b, then push a+b.
- Subtraction: Pop a and b, then push b-a.
* Multiplication: Pop a and b, then push a*b.
/ Integer division: Pop a and b, then push b/a, rounded down. If a is zero, push zero.
% Modulo: Pop a and b, then push the b%a. If a is zero, push zero.
! Logical NOT: Pop a value. If the value is zero, push 1; otherwise, push zero.
` (backtick) Greater than: Pop a and b, then push 1 if b>a, otherwise push zero.
> Start moving right.
< Start moving left.
^ Start moving up.
v Start moving down.
? Start moving in a random cardinal direction.
_ Pop a value; move right if value = 0, left otherwise.
| Pop a value; move down if value = 0, up otherwise.
" Start string mode: push each character's ASCII value all the way up to the next ".
: Duplicate value on top of the stack. If there is nothing on top of the stack, push a 0.
\ Swap two values on top of the stack. If there is only one value, pretend there is an extra 0 on bottom of the stack.
$ Pop value from the stack and discard it.
. Pop value and output as an integer.
, Pop value and output the ASCII character represented by the integer code that is stored in the value.
# Trampoline: Skip next cell.
p A "put" call (a way to store a value for later use). Pop y, x and v, then change the character at the position (x,y) in the program to the character with ASCII value v.
g A "get" call (a way to retrieve data in storage). Pop y and x, then push ASCII value of the character at that position in the program.
@ End program.
  (i.e. a space) No-op. Does nothing.
The above list is slightly modified: you'll notice if you look at the Wikipedia page that we do not use the user input instructions and dividing by zero simply yields zero.

Here's an example:

>987v>.v
v456<  :
>321 ^ _@
will create the output 123456789.

So what you must do is create a function such that when you pass in the Befunge code, the function returns the output that would be generated by the code. So, for example:

"123456789".equals(new BefungeInterpreter().interpret(">987v>.v\nv456<  :\n>321 ^ _@") */

function interpret(code) {
  // Create a 2D grid to represent the code
  const grid = code.split("\n").map((row) => row.split(""));

  // Initialize the instruction pointer and the stack
  let x = 0,
    y = 0,
    dx = 1,
    dy = 0,
    stack = [];

  // Helper function to get the value at the specified position in the grid
  function getValue(x, y) {
    if (y < 0 || y >= grid.length || x < 0 || x >= grid[y].length) {
      return " ";
    }
    return grid[y][x];
  }

  // Interpret the code
  let output = "";
  let inStringMode = false;
  while (true) {
    let c = getValue(x, y);
    if (inStringMode && c !== '"') {
      stack.push(c.charCodeAt(0));
    } else if (c >= "0" && c <= "9") {
      stack.push(Number(c));
    } else {
      switch (c) {
        case "+":
          stack.push(stack.pop() + stack.pop());
          break;
        case "-":
          stack.push(-stack.pop() + stack.pop());
          break;
        case "*":
          stack.push(stack.pop() * stack.pop());
          break;
        case "/": {
          const a = stack.pop(),
            b = stack.pop();
          if (a === 0) {
            stack.push(0);
          } else {
            stack.push(Math.floor(b / a));
          }
          break;
        }
        case "%": {
          const a = stack.pop(),
            b = stack.pop();
          if (a === 0) {
            stack.push(0);
          } else {
            stack.push(b % a);
          }
          break;
        }
        case "!":
          stack.push(stack.pop() === 0 ? 1 : 0);
          break;
        case "`":
          stack.push(stack.pop() < stack.pop() ? 1 : 0);
          break;
        case ">":
          dx = 1;
          dy = 0;
          break;
        case "<":
          dx = -1;
          dy = 0;
          break;
        case "^":
          dx = 0;
          dy = -1;
          break;
        case "v":
          dx = 0;
          dy = 1;
          break;
        case "?": {
          const dir = Math.floor(Math.random() * 4);
          dx = [1, -1, 0, 0][dir];
          dy = [0, 0, -1, 1][dir];
          break;
        }
        case "_":
          dx = stack.pop() === 0 ? 1 : -1;
          dy = 0;
          break;
        case "|":
          dx = 0;
          dy = stack.pop() === 0 ? 1 : -1;
          break;
        case '"':
          inStringMode = !inStringMode;
          break;
        case ":":
          stack.push(stack.length > 0 ? stack[stack.length - 1] : 0);
          break;
        case "\\": {
          const a = stack.pop(),
            b = stack.pop();
          stack.push(a);
          stack.push(b);
          break;
        }
        case "$":
          stack.pop();
          break;
        case ".":
          output += stack.pop().toString();
          break;
          // case ",":
          output += String.fromCharCode(stack.pop());
          break;
        case "#":
          x += dx;
          y += dy;
          break;
        case "g": {
          const y_ = stack.pop(),
            x_ = stack.pop();
          stack.push(getValue(x_, y_).charCodeAt(0));
          break;
        }
        case "p": {
          const y_ = stack.pop(),
            x_ = stack.pop(),
            v = String.fromCharCode(stack.pop());
          grid[y_][x_] = v;
          break;
        }
        case "@":
          return output;
      }
    }
    x += dx;
    y += dy;
  }
}

/**
 To give credit where credit is due: This problem was taken from the ACMICPC-Northwest Regional Programming Contest. Thank you problem writers.

You are helping an archaeologist decipher some runes. He knows that this ancient society used a Base 10 system, and that they never start a number with a leading zero. He's figured out most of the digits as well as a few operators, but he needs your help to figure out the rest.

The professor will give you a simple math expression, of the form

[number][op][number]=[number]
He has converted all of the runes he knows into digits. The only operators he knows are addition (+),subtraction(-), and multiplication (*), so those are the only ones that will appear. Each number will be in the range from -1000000 to 1000000, and will consist of only the digits 0-9, possibly a leading -, and maybe a few ?s. If there are ?s in an expression, they represent a digit rune that the professor doesn't know (never an operator, and never a leading -). All of the ?s in an expression will represent the same digit (0-9), and it won't be one of the other given digits in the expression. No number will begin with a 0 unless the number itself is 0, therefore 00 would not be a valid number.

Given an expression, figure out the value of the rune represented by the question mark. If more than one digit works, give the lowest one. If no digit works, well, that's bad news for the professor - it means that he's got some of his runes wrong. output -1 in that case.

Complete the method to solve the expression to find the value of the unknown rune. The method takes a string as a paramater repressenting the expression and will return an int value representing the unknown rune or -1 if no such rune exists.
 */

function solveExpression(exp) {
  const [left, op, right, result] = exp.split(/([+=*])/);
  const possibleDigits = "0123456789".split("").filter((d) => !left.includes(d) && !right.includes(d) && !result.includes(d));
  let minDigit = -1;

  for (const digit of possibleDigits) {
    const leftValue = left.replace(/\?/g, digit);
    const rightValue = right.replace(/\?/g, digit);
    const resultValue = result.replace(/\?/g, digit);
    if (isValidNumber(leftValue) && isValidNumber(rightValue) && isValidNumber(resultValue)) {
      const leftNum = Number(leftValue);
      const rightNum = Number(rightValue);
      const resultNum = Number(resultValue);
      if (isValidEquation(leftNum, op, rightNum, resultNum)) {
        if (minDigit === -1 || digit < minDigit) {
          minDigit = digit;
        }
      }
    }
  }

  return minDigit;
}

function isValidNumber(numStr) {
  if (numStr.startsWith("-")) {
    numStr = numStr.slice(1);
  }
  return !numStr.startsWith("0") && numStr.length > 0 && /^[0-9]+$/.test(numStr) && Number(numStr) >= -1000000 && Number(numStr) <= 1000000;
}

function isValidEquation(left, op, right, result) {
  switch (op) {
    case "+":
      return left + right === result;
    case "-":
      return left - right === result;
    case "*":
      return left * right === result;
    default:
      return false;
  }
}

/**
 *DESCRIPTION:
Connect Four
Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
 */

function whoIsWinner(piecesPositionList) {
  const board = Array(6)
    .fill()
    .map(() => Array(7).fill(null));

  const getColor = (piece) => piece.split("_")[1];
  const getColumn = (piece) => piece.split("_")[0].charCodeAt(0) - "A".charCodeAt(0);

  for (const piece of piecesPositionList) {
    const color = getColor(piece);
    const column = getColumn(piece);

    let row = 5;
    while (row >= 0 && board[row][column] !== null) {
      row--;
    }

    if (row < 0) {
      return "Draw";
    }

    board[row][column] = color;

    if (checkWin(board, row, column)) {
      return color;
    }
  }

  return "Draw";
}

function checkWin(board, row, column) {
  const color = board[row][column];

  // check horizontal
  let count = 0;
  for (let c = 0; c < board[row].length; c++) {
    if (board[row][c] === color) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }

  // check vertical
  count = 0;
  for (let r = 0; r < board.length; r++) {
    if (board[r][column] === color) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }

  // check diagonal
  count = 0;
  let r = row,
    c = column;
  while (r > 0 && c > 0) {
    r--;
    c--;
  }
  while (r < board.length && c < board[row].length) {
    if (board[r][c] === color) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
    r++;
    c++;
  }

  // check other diagonal
  count = 0;
  r = row;
  c = column;
  while (r > 0 && c < board[row].length - 1) {
    r--;
    c++;
  }
  while (r < board.length && c >= 0) {
    if (board[r][c] === color) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
    r++;
    c--;
  }

  return false;
}

/*
Objective
Today, we're discussing data types. Check out the Tutorial tab for learning materials and an instructional video!

Task
Complete the code in the editor below. The variables , , and  are already declared and initialized for you. You must:

Declare  variables: one of type int, one of type double, and one of type String.
Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
Use the  operator to perform the following operations:
Print the sum of  plus your int variable on a new line.
Print the sum of  plus your double variable to a scale of one decimal place on a new line.
Concatenate  with the string you read as input and print the result on a new line.
Note: If you are using a language that doesn't support using  for string concatenation (e.g.: C), you can just print one variable immediately following the other on the same line. The string provided in your editor must be printed first, immediately followed by the string you read as input.

Input Format

The first line contains an integer that you must sum with .
The second line contains a double that you must sum with .
The third line contains a string that you must concatenate with .

Output Format

Print the sum of both integers on the first line, the sum of both doubles (scaled to  decimal place) on the second line, and then the two concatenated strings on the third line.

Sample Input

12
4.0
is the best place to learn and practice coding!
Sample Output

16
8.0
HackerRank is the best place to learn and practice coding!
Explanation

When we sum the integers  and , we get the integer .
When we sum the floating-point numbers  and , we get .
When we concatenate HackerRank with is the best place to learn and practice coding!, we get HackerRank is the best place to learn and practice coding!.

You will not pass this challenge if you attempt to assign the Sample Case values to your variables instead of following the instructions above and reading input from stdin. */

function processData(input) {
  // Split the input by newline character into an array
  const inputArr = input.split("\n");

  // Parse the integers and floating point number from the input
  const i = parseInt(inputArr[0]);
  const d = parseFloat(inputArr[1]);

  // Get the string from the input
  const s = inputArr[2];

  // Perform the required operations
  const sumInt = i + 4;
  const sumDouble = (d + 4).toFixed(1);
  const concatStr = "HackerRank " + s;

  // Print the results to console
  console.log(sumInt);
  console.log(sumDouble);
  console.log(concatStr);
}

/*
Given the participants' score sheet for your University Sports Day, you are required to find the runner-up score. You are given  scores. Store them in a list and find the score of the runner-up.

Input Format

The first line contains . The second line contains an array   of  integers each separated by a space.

Constraints

Output Format

Print the runner-up score.

Sample Input 0

5
2 3 6 6 5
Sample Output 0

5
Explanation 0

Given list is . The maximum score is , second maximum is . Hence, we print  as the runner-up score. */

function findRunnerUp(n, arr) {
  let max = -Infinity;
  let runnerUp = -Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      runnerUp = max;
      max = arr[i];
    } else if (arr[i] > runnerUp && arr[i] < max) {
      runnerUp = arr[i];
    }
  }

  return runnerUp;
}

// Example usage:
console.log(findRunnerUp(5, [2, 3, 6, 6, 5])); // Output: 5

/*
Given the names and grades for each student in a class of  students, store them in a nested list and print the name(s) of any student(s) having the second lowest grade.

Note: If there are multiple students with the second lowest grade, order their names alphabetically and print each name on a new line.

Example

The ordered list of scores is , so the second lowest score is . There are two students with that score: . Ordered alphabetically, the names are printed as:

alpha
beta
Input Format

The first line contains an integer, , the number of students.
The  subsequent lines describe each student over  lines.
- The first line contains a student's name.
- The second line contains their grade.

Constraints

There will always be one or more students having the second lowest grade.
Output Format

Print the name(s) of any student(s) having the second lowest grade in. If there are multiple students, order their names alphabetically and print each one on a new line.

Sample Input 0

5
Harry
37.21
Berry
37.21
Tina
37.2
Akriti
41
Harsh
39
Sample Output 0

Berry
Harry
Explanation 0

There are  students in this class whose names and grades are assembled to build the following list:

python students = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]

The lowest grade of  belongs to Tina. The second lowest grade of  belongs to both Harry and Berry, so we order their names alphabetically and print each name on a new line. */

function findRunnerUpScore(n, arr) {
  // Convert the input array to a Set to remove duplicates and sort it in descending order
  const uniqueScores = new Set(arr);
  const sortedScores = Array.from(uniqueScores).sort((a, b) => b - a);

  // Return the second largest score
  return sortedScores[1];
}

const n = parseInt(readLine());
const arr = readLine().split(" ").map(Number);

console.log(findRunnerUpScore(n, arr));

/**
 A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:

The first smallest Hamming number is 1 = 203050
The second smallest Hamming number is 2 = 213050
The third smallest Hamming number is 3 = 203150
The fourth smallest Hamming number is 4 = 223050
The fifth smallest Hamming number is 5 = 203051
The 20 smallest Hamming numbers are given in the Example test fixture.

Your code should be able to compute the first 5 000 ( LC: 400, Clojure: 2 000, Haskell: 12 691, NASM, C, D, C++, Go and Rust: 13 282 ) Hamming numbers without timing out.
 */

function hamming(n) {
  // Initialize an array to store the Hamming numbers
  const hammingNums = [1];

  // Initialize the indices for 2, 3, and 5
  let index2 = 0,
    index3 = 0,
    index5 = 0;

  // Loop until we have computed the nth Hamming number
  while (hammingNums.length < n) {
    // Compute the next candidate Hamming numbers
    const nextNum2 = hammingNums[index2] * 2;
    const nextNum3 = hammingNums[index3] * 3;
    const nextNum5 = hammingNums[index5] * 5;

    // Choose the smallest candidate and add it to the array
    const nextNum = Math.min(nextNum2, nextNum3, nextNum5);
    hammingNums.push(nextNum);

    // Update the indices for the chosen candidate
    if (nextNum === nextNum2) {
      index2++;
    }
    if (nextNum === nextNum3) {
      index3++;
    }
    if (nextNum === nextNum5) {
      index5++;
    }
  }

  // Return the nth Hamming number
  return hammingNums[n - 1];
}

/*
sort binary tree by levels
You are given a binary tree:

class Node { 
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}
Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

Return empty array if root is null.

Example 1 - following tree:

                 2
            8        9
          1  3     4   5
Should return following list:

[2,8,9,1,3,4,5]
Example 2 - following tree:

                 1
            8        4
              3        5
                         7
Should return following list:

[1,8,4,3,5,7] */

function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return result;
}

/**
The Millionth Fibonacci Kata
 DESCRIPTION:
The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him. Gabriel thunders to the pope:

Gather all of the learned men in Pisa, especially Leonardo Fibonacci. In order for the crusades in the holy lands to be successful, these men must calculate the millionth number in Fibonacci's recurrence. Fail to do this, and your armies will never reclaim the holy land. It is His will.

The angel then vanishes in an explosion of white light.

Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself. He never was very good at math.

He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history, he cannot represent this number. If he only knew about the invention of zero, it might make this sort of thing easier.

He decides to go back to bed. He consoles himself, The Lord would never challenge me thus; this must have been some deceit by the devil. A pretty horrendous nightmare, to be sure.

Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.

In this kata you will have to calculate fib(n) where:

fib(0) := 0
fib(1) := 1
fin(n + 2) := fib(n + 1) + fib(n)
Write an algorithm that can handle n up to 2000000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.
 */
function fib(n) {
  if (n === 0) {
    return 0n;
  } else if (n === 1 || n === -1) {
    return 1n;
  }

  let a = 0n;
  let b = 1n;
  let sign = n < 0 && n % 2 === 0 ? -1n : 1n;

  for (let i = 2; i <= Math.abs(n); i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return sign * b;
}

/*
Multiplying numbers as strings
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests! */
function multiply(a, b) {
  const len1 = a.length;
  const len2 = b.length;
  const result = Array(len1 + len2).fill(0);
  let carry = 0;

  for (let i = len1 - 1; i >= 0; i--) {
    let digit1 = parseInt(a[i]);

    for (let j = len2 - 1; j >= 0; j--) {
      let digit2 = parseInt(b[j]);

      let product = digit1 * digit2 + carry + result[i + j + 1];
      carry = Math.floor(product / 10);
      result[i + j + 1] = product % 10;
    }

    result[i] += carry;
    carry = 0;
  }

  let finalResult = result.join("").replace(/^0+/, "");

  return finalResult === "" ? "0" : finalResult;
}

/**
 Rectangle Rotation
 Task
A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example
For a = 6 and b = 4, the output should be 23

The following picture illustrates the example, and the 23 points are marked green.



Input/Output
[input] integer a

A positive even integer.

Constraints: 2 ≤ a ≤ 10000.

[input] integer b

A positive even integer.

Constraints: 2 ≤ b ≤ 10000.

[output] an integer

The number of inner points with integer coordinates.
 */

function rectangleRotation(a, b) {
  const sideA = Math.floor(a * Math.sqrt(2));
  const sideB = Math.floor(b * Math.sqrt(2));
  const startX = -sideA;
  const endX = sideA;
  const startY = -sideB;
  const endY = sideB;
  let count = 0;

  for (let x = startX; x <= endX; x++) {
    for (let y = startY; y <= endY; y++) {
      const rotatedX = (x * Math.sqrt(2) - y * Math.sqrt(2)) / 2;
      const rotatedY = (x * Math.sqrt(2) + y * Math.sqrt(2)) / 2;

      if (Math.abs(rotatedX) <= a / 2 && Math.abs(rotatedY) <= b / 2) {
        count++;
      }
    }
  }

  return count;
}
const a = 6;
const b = 4;
const result = rectangleRotation(a, b);

/*

Break the pieces
You are given a ASCII diagram, comprised of minus signs -, plus signs +, vertical bars | and whitespaces   . Your task is to write a function which breaks the diagram in the minimal pieces it is made of.

For example, if the input for your function is this diagram:

+------------+
|            |
|            |
|            |
+------+-----+
|      |     |
|      |     |
+------+-----+
the returned value should be the list of:

+------------+
|            |
|            |
|            |
+------------+
(note how it lost a + sign in the extraction)

as well as

+------+
|      |
|      |
+------+
and

+-----+
|     |
|     |
+-----+
The diagram is given as an ordinary multiline string. There are no borders touching each others.

The pieces should not have trailing spaces at the end of the lines. However, it could have leading spaces if the figure is not a rectangle. For instance:

    +---+
    |   |
+---+   |
|       |
+-------+
However, it is not allowed to use more leading spaces than necessary. It is to say, the first character of some of the lines should be different than a space.

Finally, note that only the explicitly closed pieces are considered. Spaces "outside" of the shape are part of the background . Therefore the diagram above has a single piece.

Have fun!

Note : in C++ you are provided with two utility functions :

std::string join(const std::string &sep, const std::vector<std::string> &to_join); // Returns the concatenation of all the strings in the vector, separated with sep 

std::vector<std::string> split_lines(const std::string &to_split); // Splits a string, using separator '\n' */

function extractShapes(diagram) {
  const shapes = [];
  const rows = diagram.trim().split("\n");
  const width = rows[0].length;
  const height = rows.length;
  const visited = new Array(height).fill().map(() => new Array(width).fill(false));
  const queue = [];

  function isBorder(row, col) {
    return row >= 0 && col >= 0 && row < height && col < width && (rows[row][col] === "+" || rows[row][col] === "-" || rows[row][col] === "|");
  }

  function bfs(startRow, startCol) {
    const shape = [];
    queue.push([startRow, startCol]);
    while (queue.length > 0) {
      const [row, col] = queue.shift();
      if (visited[row][col]) continue;
      visited[row][col] = true;
      if (!isBorder(row, col)) return null;
      shape.push([row, col]);
      queue.push([row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]);
    }
    return shape;
  }

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (visited[row][col]) continue;
      if (rows[row][col] !== "+") continue;
      const shape = bfs(row, col);
      if (shape !== null) {
        shapes.push(shape);
      }
    }
  }

  return shapes.map((shape) => {
    const minRow = Math.min(...shape.map(([row, _]) => row));
    const maxRow = Math.max(...shape.map(([row, _]) => row));
    const minCol = Math.min(...shape.map(([_, col]) => col));
    const maxCol = Math.max(...shape.map(([_, col]) => col));
    const rows = [];
    for (let row = minRow; row <= maxRow; row++) {
      let line = "";
      for (let col = minCol; col <= maxCol; col++) {
        line += isBorder(row, col) ? diagram[row * (width + 1) + col] : " ";
      }
      rows.push(line.trimRight());
    }
    return rows.join("\n");
  });
}

// const assert = require('assert');

// const input = `+------------+
// |            |
// |            |
// |            |
// +------+-----+
// |      |     |
// |      |     |
// +------+-----+`;
// const expected = [
//   '+------------+\n|            |\n|            |\n|            |\n+------------+',
//   '+------+\n|      |\n|      |\n

/*
DESCRIPTION:
This is the second part of this kata series. First part is here.

We want to create an interpreter of assembler which will support the following instructions:

mov x, y - copy y (either an integer or the value of a register) into register x.
inc x - increase the content of register x by one.
dec x - decrease the content of register x by one.
add x, y - add the content of the register x with y (either an integer or the value of a register) and stores the result in x (i.e. register[x] += y).
sub x, y - subtract y (either an integer or the value of a register) from the register x and stores the result in x (i.e. register[x] -= y).
mul x, y - same with multiply (i.e. register[x] *= y).
div x, y - same with integer division (i.e. register[x] /= y).
label: - define a label position (label = identifier + ":", an identifier being a string that does not match any other command). Jump commands and call are aimed to these labels positions in the program.
jmp lbl - jumps to the label lbl.
cmp x, y - compares x (either an integer or the value of a register) and y (either an integer or the value of a register). The result is used in the conditional jumps (jne, je, jge, jg, jle and jl)
jne lbl - jump to the label lbl if the values of the previous cmp command were not equal.
je lbl - jump to the label lbl if the values of the previous cmp command were equal.
jge lbl - jump to the label lbl if x was greater or equal than y in the previous cmp command.
jg lbl - jump to the label lbl if x was greater than y in the previous cmp command.
jle lbl - jump to the label lbl if x was less or equal than y in the previous cmp command.
jl lbl - jump to the label lbl if x was less than y in the previous cmp command.
call lbl - call to the subroutine identified by lbl. When a ret is found in a subroutine, the instruction pointer should return to the instruction next to this call command.
ret - when a ret is found in a subroutine, the instruction pointer should return to the instruction that called the current function.
msg 'Register: ', x - this instruction stores the output of the program. It may contain text strings (delimited by single quotes) and registers. The number of arguments isn't limited and will vary, depending on the program.
end - this instruction indicates that the program ends correctly, so the stored output is returned (if the program terminates without this instruction it should return the default output: see below).
; comment - comments should not be taken in consideration during the execution of the program.

Output format:
The normal output format is a string (returned with the end command). For Scala and Rust programming languages it should be incapsulated into Option.

If the program does finish itself without using an end instruction, the default return value is:

-1 (as an integer)

Input format:
The function/method will take as input a multiline string of instructions, delimited with EOL characters. Please, note that the instructions may also have indentation for readability purposes.

For example:

program = """
; My first program
mov  a, 5
inc  a
call function
msg  '(5+1)/2 = ', a    ; output message
end

function:
    div  a, 2
    ret
"""
assembler_interpreter(program)
The above code would set register a to 5, increase its value by 1, calls the subroutine function, divide its value by 2, returns to the first call instruction, prepares the output of the program and then returns it with the end instruction. In this case, the output would be (5+1)/2 = 3.

 */

function assemblerInterpreter(program) {
  const instructions = program
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "" && !line.startsWith(";"));
  const labels = findLabels(instructions);
  const registers = new Map();
  let output = "";
  let ip = 0;
  while (ip < instructions.length) {
    const instruction = instructions[ip];
    const tokens = instruction.split(/\s+/);
    switch (tokens[0]) {
      case "mov":
        mov(tokens[1], tokens[2]);
        break;
      case "inc":
        inc(tokens[1]);
        break;
      case "dec":
        dec(tokens[1]);
        break;
      case "add":
        add(tokens[1], tokens[2]);
        break;
      case "sub":
        sub(tokens[1], tokens[2]);
        break;
      case "mul":
        mul(tokens[1], tokens[2]);
        break;
      case "div":
        div(tokens[1], tokens[2]);
        break;
      case "cmp":
        cmp(tokens[1], tokens[2]);
        break;
      case "jmp":
        ip = jump(labels, tokens[1]);
        break;
      case "jne":
        ip = jumpIfNotEqual(labels, tokens[1]);
        break;
      case "je":
        ip = jumpIfEqual(labels, tokens[1]);
        break;
      case "jge":
        ip = jumpIfGreaterOrEqual(labels, tokens[1]);
        break;
      case "jg":
        ip = jumpIfGreater(labels, tokens[1]);
        break;
      case "jle":
        ip = jumpIfLessOrEqual(labels, tokens[1]);
        break;
      case "jl":
        ip = jumpIfLess(labels, tokens[1]);
        break;
      case "call":
        ip = call(labels, tokens[1], ip);
        break;
      case "ret":
        ip = returnFromCall(ip);
        break;
      case "msg":
        output += getMessage(tokens.slice(1));
        break;
      case "end":
        return output;
      default:
        throw new Error(`Unknown instruction: ${instruction}`);
    }
    ip++;
  }
  return -1;

  function findLabels(instructions) {
    const labels = new Map();
    let ip = 0;
    for (const instruction of instructions) {
      if (instruction.endsWith(":")) {
        labels.set(instruction.slice(0, -1), ip);
      } else {
        ip++;
      }
    }
    return labels;
  }

  function getRegisterValue(regOrNum) {
    if (/^-?\d+$/.test(regOrNum)) {
      return parseInt(regOrNum);
    } else {
      const value = registers.get(regOrNum);
      if (value === undefined) {
        throw new Error(`Unknown register: ${regOrNum}`);
      }
      return value;
    }
  }

  function mov(dest, src) {
    registers.set(dest, getRegisterValue(src));
  }

  function inc(reg) {
    registers.set(reg, (registers.get(reg) || 0) + 1);
  }

  function dec(reg) {
    registers.set(reg, (registers.get(reg) || 0) - 1);
  }

  function add(dest, src) {
    registers.set(dest, (registers.get(dest) || 0) + getRegisterValue(src));
  }

  function sub(dest, src) {
    registers.set(dest, (registers.get(dest) || 0) - getRegisterValue(src));
  }

  // function mul(dest, src

  /*
Binomial Expansion
DESCRIPTION:
The purpose of this kata is to write a program that can do some algebra.

Write a function expand that takes in an expression with a single, one character variable, and expands it. The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative, x is any single character variable, and n is a natural number. If a = 1, no coefficient will be placed in front of the variable. If a = -1, a "-" will be placed in front of the variable.

The expanded form should be returned as a string in the form ax^b+cx^d+ex^f... where a, c, and e are the coefficients of the term, x is the original one character variable that was passed in the original expression and b, d, and f, are the powers that x is being raised to in each term and are in decreasing order.

If the coefficient of a term is zero, the term should not be included. If the coefficient of a term is one, the coefficient should not be included. If the coefficient of a term is -1, only the "-" should be included. If the power of the term is 0, only the coefficient should be included. If the power of the term is 1, the caret and power should be excluded. */

  function expand(expr) {
    const [match, a, b, n] = expr.match(/\((-?\d*)([a-z])([+|-]\d+)\)\^(\d+)/);
    const c = binomial(n);
    let result = "";

    for (let i = 0; i <= n; i++) {
      const coefficient = c[i] * Math.pow(a, n - i) * Math.pow(b, i);
      const power = n - i;
      if (coefficient === 0) continue;
      if (i === 0) {
        result += `${coefficient}`;
      } else if (i === 1) {
        if (coefficient === 1) {
          result += `+${b}`;
        } else if (coefficient === -1) {
          result += `-${b}`;
        } else {
          result += `${coefficient}${b}`;
        }
      } else {
        if (coefficient === 1) {
          result += `+${b}^${power}`;
        } else if (coefficient === -1) {
          result += `-${b}^${power}`;
        } else {
          result += `${coefficient}${b}^${power}`;
        }
      }
    }

    return result.startsWith("+") ? result.substring(1) : result;
  }

  function binomial(n) {
    const c = [1];
    for (let i = 0; i < n; i++) {
      c.push(0);
      for (let j = i + 1; j > 0; j--) {
        c[j] += c[j - 1];
      }
    }
    return c;
  }
}
/*
How many are smaller than me II?
DESCRIPTION:
This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first.

Write

function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0] */

function smaller(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

/*
Problem Description
A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

For example, different possibilities are:

Colour here:            G G        B G        R G        B R
Becomes colour here:     G          R          B          G
With a bigger example:

R R G B R G B B
 R B R G B R B
  G G B R G G
   G R G B G
    B B R R
     B G R
      R B
       G
You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would be given 'RRGBRGBB', and you should return 'G'.

Constraints
1 <= length(row) <= 10 ** 5

The input string will only contain the uppercase letters 'B', 'G' or 'R'.

The exact number of test cases will be as follows:

100 tests of 100 <= length(row) <= 1000
100 tests of 1000 <= length(row) <= 10000
100 tests of 10000 <= length(row) <= 100000
Examples
triangle('B') == 'B'
triangle('GB') == 'R'
triangle('RRR') == 'R'
triangle('RGBG') == 'B'
triangle('RBRGBRB') == 'G'
triangle('RBRGBRBGGRRRBGBBBGG') == 'G' */
function triangle(row) {
  while (row.length > 1) {
    let nextRow = "";
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        nextRow += row[i];
      } else {
        let diff = "RGB".replace(row[i], "").replace(row[i + 1], "");
        nextRow += diff;
      }
    }
    row = nextRow;
  }
  return row;
}

/*
Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

C# is using a long, which may not have the best precision, but the tests are locked so we can't change it.

Sample words, with their rank:
ABAB = 2
AAAB = 1
BAAA = 4
QUESTION = 24572
BOOKKEEPER = 10743 */
function triangle(row) {
  while (row.length > 1) {
    let nextRow = "";
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        nextRow += row[i];
      } else {
        let diff = "RGB".replace(row[i], "").replace(row[i + 1], "");
        nextRow += diff;
      }
    }
    row = nextRow;
  }
  return row;
}
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function wordRank(word) {
  let count = {};
  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    count[c] = count[c] ? count[c] + 1 : 1;
  }

  let sorted = Object.keys(count).sort();
  let index = 1;
  for (let i = 0; i < sorted.length; i++) {
    let c = sorted[i];
    for (let j = 0; j < i; j++) {
      let d = sorted[j];
      index += count[d] * factorial(word.length - i - 1);
    }
    count[c]--;
  }
  return index;
}

/*
Task
You are at start location [0, 0] in mountain area of NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return minimal number of climb rounds to target location [N-1, N-1]. Number of climb rounds between adjacent locations is defined as difference of location altitudes (ascending or descending).

Location altitude is defined as an integer number (0-9). */
function minimumClimb(arr) {
  const n = arr.length;
  const queue = [{ x: 0, y: 0, rounds: 0 }]; // start from (0,0) with 0 rounds
  const visited = new Set(); // set to keep track of visited locations

  while (queue.length > 0) {
    const { x, y, rounds } = queue.shift(); // get the first element from the queue
    if (x === n - 1 && y === n - 1) return rounds; // reached the target location, return rounds

    const currentHeight = arr[x][y];
    const neighbors = [
      { x: x - 1, y: y, dir: "N" },
      { x: x, y: y + 1, dir: "E" },
      { x: x + 1, y: y, dir: "S" },
      { x: x, y: y - 1, dir: "W" },
    ];

    for (const { x: nx, y: ny, dir } of neighbors) {
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        const neighborHeight = arr[nx][ny];
        const diff = Math.abs(currentHeight - neighborHeight);
        if (!visited.has(`${nx},${ny}`) && diff <= 1) {
          queue.push({ x: nx, y: ny, rounds: rounds + diff }); // add the neighbor to the queue
          visited.add(`${nx},${ny}`); // mark the neighbor as visited
        }
      }
    }
  }

  return -1; // target location not reachable
}

/**
 Instructions
Given a mathematical expression as a string you must return the result as a number.

Numbers
Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

Operators
You need to support the following mathematical operators:

Multiplication *
Division / (as floating point division)
Addition +
Subtraction -
Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

Parentheses
You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

Whitespace
There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2
1--1   // 2

6 + -(4)   // 2
6 + -( -4) // 10
And the following are invalid expressions

1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
Validation
You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.
 */
function calculate(expression) {
  // Remove all whitespace from the expression
  expression = expression.replace(/\s/g, "");

  // Use a regular expression to split the expression into tokens
  // Tokens can be numbers, operators, or parentheses
  var tokens = expression.match(/(\d+\.\d+|\d+|[+\-*/()])/g);

  // Evaluate the expression using a recursive function
  function evaluate() {
    var token = tokens.shift();

    if (token == "(") {
      // Evaluate the expression inside the parentheses recursively
      var result = evaluate();

      // Remove the closing parenthesis
      tokens.shift();

      return result;
    } else {
      // Parse the number from the token
      var num = parseFloat(token);

      // Check if the token is an operator
      if (tokens[0] == "*" || tokens[0] == "/") {
        // Evaluate the next term recursively
        var nextNum = evaluate();

        // Apply the operator
        if (tokens[0] == "*") {
          num *= nextNum;
        } else {
          num /= nextNum;
        }
      }

      // Apply any remaining operators
      while (tokens.length > 0 && (tokens[0] == "+" || tokens[0] == "-")) {
        var operator = tokens.shift();
        var nextNum = evaluate();

        if (operator == "+") {
          num += nextNum;
        } else {
          num -= nextNum;
        }
      }

      return num;
    }
  }

  // Call the recursive evaluate function to get the result
  return evaluate();
}

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */
function isPangram(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  return new Set(str).size === 26;
}

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

function isIsogram(str) {
  // Convert string to lowercase to ignore letter case
  str = str.toLowerCase();

  // Create an object to keep track of letters
  const letters = {};

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the letter is already in the object, return false (not an isogram)
    if (letters[char]) {
      return false;
    }

    // Otherwise, add the letter to the object
    letters[char] = true;
  }

  // If the loop completes without finding a repeat, return true (isogram)
  return true;
}

/**
Return Negative
 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

/*
Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
  const xCount = (str.match(/x/gi) || []).length;
  const oCount = (str.match(/o/gi) || []).length;
  return xCount === oCount;
}

/**
 You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
 */

function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    const nextRoot = root + 1;
    return nextRoot * nextRoot;
  } else {
    return -1;
  }
}

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("world")); // 'dlrow'
console.log(reverseString("word")); // 'drow'

/**
 * Find the odd int
 *Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


 */
