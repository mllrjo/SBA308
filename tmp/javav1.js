// How do we assign a value to a variable?
// let variable = value
// How do we change the value of a variable?
// variable = newValue
// How do we assign an existing variable to a new variable?
// new_variable = existing_variable
// Remind me, what are declare, assign, and define?
// declare: with let or var
// assign: let variable = value
// define:
// What is pseudocoding and why should you do it?
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?


// ======B.Strings======
// For all other questions that involve writing code, you can solve them via the following instructions.
// Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World"
// Change the value of this variable to some number
firstVariable = 5
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable
// Change the value of secondVariableto any string.
secondVariable = "any string"
// What is the value of firstVariable?
console.log(firstVariable)
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "your name"
console.log("Hello, my name is " + yourName)
// ex: Hello, my name is Jean Valjean

//======== C. Booleans =========//
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a === c - b); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
if(animal === "cow") console.log("mooooo")
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
if(animal === "cow") {
    console.log("mooooo")
} else {
    console.log("Hey! You're not a cow.")
}

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let age = 35;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if(age >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
}


// II. Loops
// Remember: USE letwhen you initialize your for loops!

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i=0; i <= 10; i++) console.log(i)
// Write a loop that will print out all the numbers from 10 up to and including 400
for(let i=10; i<=400; i++) console.log(i)
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i <= 4000; i+=3) console.log(i)


// B. Get even
// Print out the numbers that are within the range of 1 - 100
for(i=1; i <= 100; i++) console.log(i)
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(i=1; i <= 100; i++) {
    if(i%2 == 0) {
        console.log(i, "<-- is an even number");
    } else {
        console.log(i);
    }
}

// ===========C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for(let i = 0; i <= 100; i++) {
    if(i%5==0) console.log("I found a ${i}. High five!")
    if(i%3==0) console.log("I found a ${i}. Three is a crowd!")
}

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for(let i = 1; i <= 10; i++) bank_account+=i;
console.log("\$",bank_account)

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let bonus = 0;
for(let i =1; i <= 100; i++) {
    bonus += 2*i;
}
console.log("\$",bonus)


// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?



// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes



// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();



// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

