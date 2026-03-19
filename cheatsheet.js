// Variables and data types

// Null = intentional nothing
// Undefined = unintentional nothing

// NaN = not a number

let age = 17;
const points = 100;

// >= greater than or equal to

// === & !== recommended
// === checks for values and types
// == checks for values

let comparison = '4' !== 4

// if statements
let hasMembership = false;
let signedIn = true;

if (hasMembership === true) {
  console.log("show user the video");
} else if (signedIn === true) {
  console.log("tell user to upgrade their account");
} else {
  console.log("tell user to log in");
}

// use backwards ticks ( ` ) under your esc key
let age = 19

if (age > 18){
    console.log(`You are ${age} years old, you may enter the club!`)
}
else if (age === 18){
    console.log("You just turnned 18, welcome!")
}
else{
    console.log(`You're ${age} years old, get outta here`)
}


// && = and
// || = or
let age = 18;
let hasId = false;
// !hasId and hasId checks for boolean
if (age >= 18 && !hasId) {
  console.log("You may enter the club");
}


// Falsey Values
// undefined
// null
// NaN
// 0
// " " (empty str)
// false

// Truthy Values
// all numbers
// not empty str
// empty arrays and objects

// Boolean() to check if a value is falsey or truthy


// Ternary Operators
let loggedIn = true;
let hasMembership = true;

let str = loggedIn && hasMembership ? "show video" : "don't show video";

console.log(str);

// Loops
let counter = 1

// NOTE: it will crash your site if your loop is infinite
while (counter <= 20) {
    console.log(counter)
    counter = counter + 1
}

console.log("while loop finished running")

// For Loop
//       set i|loop amt|add 1 to i
for (let i = 0; i < 50; i++) {
    console.log(i + 1)
}

// For Loop Excersize I
for (i = 1; i <= 15; i++) {
  if (i % 5 === 0) {
    str = "ASAP Frontend";
  } else if (i % 2 === 0) {
    str = "Frontend";
  } else {
    str = "ASAP";
  }

  console.log(`${i} - ` + str);
}

// For Loop Excersize II
str = "ASAP Frontend";

for (i = 0; i < str.length; i++) {
    console.log(str[i])
}


// Functions

// Regular Function
function convertUsdtoAud(USD) {
    return USD*1.5
}

// Arrow Function: good for short simple stuff (does not work with objects)
const convertUsdtoAud = (USD) => {
  return USD * 1.5;
};

console.log(convertUsdtoAud(200));


// Arrays
// Callback function: function passed into another function as an argument

// Mutating methods: changes array
// push: appends onto the end of an array
array.push('Bread')

// Non-mutating method: makes a clone
let array = [20, 15, 10, 30];

let filteredArray = array.filter((element) => {
  if (element <= 15) {
    return true;
  }
});

// shortened
console.log(filteredArray);

let array = [20, 15, 10, 30];

let filteredArray = array.filter((element) => element <= 15);

console.log(filteredArray);

// For Loops for Array
let people = [18, 20, 16, 15, 21];
let adults = [];

for (i = 0; i < people.length; i++) {
  if (people[i] >= 18) {
    adults.push(people[i]);
  }
}

console.log(adults);

// Map method
let array = [1, 2, 3, 4, 5];

// Non-mutating
let newArray = array.map((element) => {
    console.log(element)
    return null
});

console.log(newArray)

// Shortened 
let array = [1, 2, 3, 4, 5];

// Non-mutating method
let newArray = array.map((element) => null);

console.log(newArray)

// map excersize 
let usDollars = [10, 20, 30, 40];

// Short solution
let auDollars = usDollars.map((element) => element * 1.5);

// Long solution
let auDollars = usDollars.map((element) => {
  return element * 1.5;
});

console.log(auuDollars);


// Objects

// You can put them in a list
let users = [
  {
    email: "example@gmail.com",
    password: "test1234",
    name: "John Doe",
    discord: "examplediscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3],
  },
  {
    email: "example@gmail.com",
    password: "test1234",
    name: "John Doe",
    discord: "examplediscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3],
  },
];

console.log(users[0].lessonsCompleted.map((element) => element * 3));

function signUp(user) {
  users.push(user);
}

// You can use them as an argument so your code does not look messy
signUp({
    email: "example@gmail.com",
    password: "test1234",
    name: "John Doe",
    discord: "examplediscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3],
  });

console.log(users[2].email)


// DOM - Document Object Model

// 1st method - best
console.log(document.querySelector("h1"));
// Id - #heading , Class - .heading (full stop)

// 2nd method
console.log(document.getElements("heading"));

// Change html
document.querySelector("h1").innerHTML += "ASAP Frontend"

// Change CSS
document.querySelector('h1').style.color = 'red'

// make button green when clicked
function changeButtonToGreen() {
    document.querySelector('button').style.backgroundColor = 'green'
}

// Change Class names
function toggleSidebar() {
    document.querySelector('body').classList.toggle("open")
}