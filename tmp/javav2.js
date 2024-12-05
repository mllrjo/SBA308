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


//================ III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
// elements
// Do Arrays guarantee those things will be in order?
// no.
// What real-life thing could you model with an array?
// 



//================= B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["'","'","'"]
console.log(quotes)



// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
console.log(randomThings[0])
// Change the value of "Hello"to "World"
randomThings[2] = "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)



// D. Change values
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon")
myArray.push("sring of my choice")
//Remove the 5 from the beginning of the array.
myArray.shift()
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// Remove the string of your choice from the end of the array.
myArray.pop()
// Reverse this array using Array.prototype.reverse().
const reverseArray = myArray.reverse()
console.log(reverseArray)
// Did you mutate the array? Yes.  What does mutate mean? Array changed in place. Did the .reverse() method return anything? Yes reversed myArray.
console.log(myArray)


// F. Biggie Smalls
// Create a variable that contains an integer.
let variable = 1
// Write an if ... elsestatement that:
if(variable < 100) {
    console.log("little number")
} else {
    console.log("big number")
}
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".



// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Krisyn is rocking that " + kristynsCloset[2] + " today!")
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.



// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.




// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";



