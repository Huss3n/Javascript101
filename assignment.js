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
//  let language;

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
// neighbors = Number(prompt("How many neighbors do you have?"))
console.log(neighbors)

if(neighbors === 1){
    console.log("Only one border")
}else if(neighbors > 1){
    console.log("More than one border")
}else{
    console.log("no borders")
}

// code challenge

// scores
const minimumScore = 100;
// const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110)  / 3;

// const dolphinsAverageScore = (97 + 112 + 80) / 3;
// const koalasAverageScore = (109 + 95 + 50)  / 3;

const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 106)  / 3;

//  compare the teams average score and print winner of competition

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


// switch statements
let day;
// day = prompt(`Enter day`);

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

// conditional ternary operator
// allows us to write if else on the same line
// ? : are ternary operators
const agee = 23
agee >= 18 ? console.log(`i like to race cars`) : console.log(`i like to race bicycles`)


// ternary coding challenge
const value = 275
let tip;

let calculatedTip = value >= 50 && value <= 300 ? (0.15 * value) : (0.2 * value);

console.log(`The bill was ${value}, the tip was ${calculatedTip} and the total value ${value + calculatedTip}`)

// switch assignment

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

// type conversion and coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617' 
console.log('19' - '13' + 17); // -> 23 
console.log('123' < 57); // -> false
 console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// logical operators 
if (language === 'english' && population < 50 && !isIsland)
{
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}



// functions 

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


// function assignment
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


// functions calling other functions

// arrays

const newArray = ["Hussein", "Jonas", "Bob"]
console.log(newArray)
// accessing the first element 
// add the position of these items starting from 0
console.log(newArray[0])

// number of elements in the array
console.log(newArray.length)

//get the last element in the array
console.log(newArray[newArray.length - 1])

// adding elements to an array
newArray[3] = "isaac"
console.log(newArray[3])
console.log(newArray.length)
console.log(newArray)

// array can hold different data types

// array exercise
 function getAges(YOB){
    return 2037 - YOB;
 }

const ages = [1990, 1989, 1978, 2010, 2005, 2000, 2016]
const age1 = getAges(ages[0])
const age2 = getAges(ages[1])
const age3 = getAges(ages[2])
const age4 = getAges(ages[ages.length - 1])
// const age4 = getAges[ages(ages.length - 1])
console.log(age1, age2, age3, age4)

 const newAges = [getAges(ages[0]), getAges(ages[1]), getAges(ages[2]), getAges(ages[ages.length - 1])];
 console.log(newAges)


// basic array operations (methods)
// push method 
// push returns the length of the new array
// add elements to an array 

// code challenge 
function calctTip(amount){
    if (amount >= 50 && amount <= 300){
        return amount * 0.15;
    }else{
        return amount * 0.2
    }
}

console.log(calctTip(400))


const bills = [125, 555, 44]

// // using an arrow function
const calcTip = amount => {
    if (amount >= 50 && amount <= 300){
        return amount * 0.15;
    }else{
        return amount * 0.2
    }
}
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totalTips = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]

console.log(tips)
console.log(totalTips)

// introduction to objects

const details = {
    firstName: "Hussein",
    secondName: "Aisak",
    age: 19,
    background: 'Nobody knows',
    friends: ["Jonas", "Bob", "Isaac", "know", "cars", "when"],
    funcExample: function(){
        const retirement = 67 - this.age
       return retirement;
    }
}
console.log(details)

// accessing the elements inside the object using the dot notation
console.log(details.age)
console.log(details.friends[2])

// accessing using the bracket notation
console.log(details[`background`])

//  since the last words are same we can do this
//  only works with bracket notation
 const namekey = `Name`
console.log(details[`first` + namekey]);

// more example of bracket notation
const whatToKnow = prompt(`What do you want to know choose between: 
firstName, 
secondName or
friends
`)

// check whether the input is same as the ones listed
if (whatToKnow != `friends` && whatToKnow != `firstName` && whatToKnow != `secondName`){
    console.log("Please choose the correct option listed above")
}else{
    console.log(details[whatToKnow])
}


// using the dot and bracket notation to add elements to the object
// adding using the dot notation
details.location = `Portugal`;
console.log(details) ;

// adding using the bracket notation
details['instagram'] = '@hussein';
console.log(details)

// challenge

console.log(details['firstName'] + " has " + details.friends.length + " friends and his best friend is " + details.friends[0])


// object methods
// addidng functions to objects

console.log(details.funcExample())

// coding challenge on objects

const objectMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    // function to calculate bmi
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

const objectJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calculateBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
objectMark.calcBMI()
console.log(objectMark.bmi)

objectJohn.calculateBMI();
console.log(objectJohn.bmi);

if( objectMark.bmi > objectJohn.bmi){
    console.log(objectMark.fullName + " 's BMI ("+ objectMark.bmi + ") is higher than "+ objectJohn.fullName + " 's BMI (" + objectJohn.bmi +")!")
}else{
    console.log(objectJohn.fullName + " 's BMI ("+ objectJohn.bmi + ") is higher than "+ objectMark.fullName + " 's BMI (" + objectMark.bmi +")!")
}
 
