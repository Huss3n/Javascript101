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
