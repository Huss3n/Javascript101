let country = "Canada"
let population = "300"
let continet = "North America"
let newPopulation;
let finlandPop = 500
let isAverage = 300
const description = "Portugal is in Europe, and its 11 million people speak portuguese"
// let recreatedDescription = `Canada is in ${continent} with the population of ${population}`;


console.log(continet)
console.log(country)
console.log(population)

 const isIsland = true;
 let language;

 console.log(typeof isIsland)

 newPopulation = population/2
console.log(newPopulation)
console.log(newPopulation + 200)

if(finlandPop > newPopulation){
    console.log(true)
}

if (isAverage > newPopulation){
    console.log("Above average population")
}
//  bmi formula = mass / (height * height)
const marksWeight = 95;
const marksHeight = 1.88;
const johnsWeight = 85;
const johnsHeight = 1.76;
let marksHigherBmi = false;

let bmiMark = marksWeight / (marksHeight * marksHeight);
let bmiJohn = johnsWeight / (johnsHeight * johnsHeight);

if(bmiMark > bmiJohn){
    marksHigherBmi = true
}

console.log("marks bmi: "+ bmiMark)
console.log("johns bmi: "+ bmiJohn)
console.log("is mark higher than john: " + marksHigherBmi)

console.log(`Just a regular string${population}`)
// console.log(recreatedDescription)

console.log(`This is 
a 
multiline string`)

const age = 18

if(age >= 18){
    console.log("Can start driving classes")
}else{
    console.log(`still young to start, come back after ${18 - age} years`)
}

// if (population > )


// coding challenge 2

if (bmiMark > bmiJohn){
    console.log("Mark has a higher bmi");
}else{
    console.log("John has a higher bmi");
}

// equility operators

let neighbors;
neighbors = Number(prompt("How many neighbors do you have?"))
console.log(neighbors)

if(neighbors === 1){
    console.log("Only one border")
}else if(neighbors > 1){
    console.log("More than one border")
}else{
    console.log("no borders")
}

code challenge

scores
const minimumScore = 100;
const dolphinsAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110)  / 3;

const dolphinsAverageScore = (97 + 112 + 80) / 3;
const koalasAverageScore = (109 + 95 + 50)  / 3;

const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 106)  / 3;

 compare the teams average score and print winner of competition

 if (dolphinsAverageScore > koalasAverageScore){
    console.log(`dolphins score = ${dolphinsAverageScore}`);
 }else if(dolphinsAverageScore === koalasAverageScore){
        console.log("The scores are equal");}
 else{
    console.log(`Koalas score = ${koalasAverageScore}`);
 }


if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > minimumScore){
    console.log(`Dolphins team won by ${dolphinsAverageScore}`)
}else if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore > minimumScore){
    console.log(`Koalas team won by ${koalasAverageScore}`)
}else if(koalasAverageScore === dolphinsAverageScore && koalasAverageScore >= minimumScore && dolphinsAverageScore >= minimumScore){
    console.log(`The score are equal`)
}else{
    console.log("No team made it 100 and no team won")
}


switch statements
let day;
day = prompt(`Enter day`);

switch(day){
    case `monday`:
        console.log("Its on a monday");
        break;
    case `tuesday`:
        console.log(`its on a tuesday`);
        break;
    default:
        console.log(`invalid day`)
}


if(day === `monday`){
    console.log(`its a monday`)
}else if(day === `tuesday`){
    console.log(`its a tuesday`)
}else if(day === `wednesday` || `friday`){
    console.log(`its a wednesday or friday`)
}else{
    console.log(`invalid day`)
}

conditional ternary operator
allows us to write if else on the same line
? : are ternary operators
const age = 23
age >= 18 ? console.log(`i like to race cars`) : console.log(`i like to race bicycles`)


ternary coding challenge
const value = 275
let tip;

let calculatedTip = value >= 50 && value <= 300 ? (0.15 * value) : (0.2 * value);

console.log(`The bill was ${value}, the tip was ${calculatedTip} and the total value ${value + calculatedTip}`)

switch assignment

const language = "arabic"
switch(language){
    case `chinese`:
    case `mandarin`:
        console.log(`Most number of native speakers`);
        break;
    case `Spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`)
        break;
    default:
        console.log("Great language too")
}

type conversion and coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617' 
console.log('19' - '13' + 17); // -> 23 
console.log('123' < 57); // -> false
 console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

logical operators 
if (language === 'english' && population < 50 && !isIsland)
{
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}



functions 

`use strict`; 
function called(){
    console.log("My name is Hussein")
}
// calling the function
called()

function fruitProcessor(apples, oranges){
    console.log(apples, oranges)
    const juice = `there are ${apples} apples and ${oranges} oranges`
    return juice;
}

console.log(fruitProcessor(5, 10))

function describeCountry(country, population, capitalCity){
    const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return describe;
}

// console.log(describeCountry("Finland", 6, "Helsinki"))
const finlad = describeCountry("Finland", 6, "Helsinki")
const england = describeCountry("England", 10, "London")
const netherlands = describeCountry("Netherlands", 13, "Amsterdam")

console.log(finlad)
console.log(england)
console.log(netherlands)

// function declaration
function calcAge(birthYear){
    return 2037 - birthYear;
}

console.log(calcAge(1991))

// function expression
// this does not have a function name 
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
console.log(calcAge2(1991))


function assignment
const worldPopulation = 300
function percentageOfWorld1(population){
    let percentage = (population / worldPopulation) * 100 
    return percentage;
}

console.log(percentageOfWorld1(Number(100)))
console.log(percentageOfWorld1(Number(250)))
console.log(percentageOfWorld1(Number(48)))

// function expression assignment

const percentageOfWorld2 = function (population){
    let percentage = (population / worldPopulation) * 100 
    return percentage;
}

console.log(percentageOfWorld2(100))

// arrow functions 
const year = 2037
// birthYear = 1991
const calcAge3 = birthYear =>  year - birthYear
console.log(calcAge3(1991)) 

// arrow function with multiple parameters
const retirementAge = (yearBorn, firstName) => {
    const age = year - yearBorn
    const yeatsToRetirement = 65 - age;
    return `${firstName} retires after ${yeatsToRetirement} years`;
}

console.log(retirementAge(1991, "Jonas"))
console.log(retirementAge(1980, "Isaac"))


