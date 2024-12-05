// Part 1.
// a.
function reverseString2(str) {
  return str.split("").reverse().join("");
}
//   Short, simple, non-repetitive.

// => b-e done in collaboration with Uliana, Swetha, Supriya <=
// b. Take an array of numbers and return the sum;
function sum (array) {
    let sum =0;
    for (let i=0; i<array.length; i++) {
        sum+=array[i];
    }
    return sum;
}

// c. Take an array of numbers and return the average:
function average (array) {
    let avg =0;
    for (let i=0; i<array.length; i++) {
        avg+=array[i];
    }
    avg/=array.length;
    return avg;
}
console.log(average(numArray));

// d. Take an array of strings and return the longest string.
let stringArray = ["dog", "kitten", "horse", "cow", "q", "12"];
function longestString(strArr) {
    let string= "";
    let l_max=0;
    for (let i=0; i<strArr.length; i++) {
        let l=strArr[i].length;
        if (l>l_max) {
            l_max =l;
            string = strArr[i];
        }
    }
    return string;
}
console.log(longestString(stringArray));

// e. Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function longerThanNumber (array, num) {
    let string= "";
    let strArr = [];
    for (let i=0; i<array.length; i++) {
        let l=array[i].length;
        if (l>num) {
            string = array[i];
            strArr.push(string);
        }
    }
    return strArr;
}
console.log(longerThanNumber(stringArray,2));

// f. recursive
function count(num,n) {
  if(num >= n) return;
  console.log(++num);
  count(num,n);
}
let num = 0;
let n = 5;
count(num,n)

Part 2.
1. array MUST BE INITIALIZED SEPARATELY FOR EACH OF THE PARTS
const array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// a. sort by age
array.sort((a, b) => {
  const ageA = Number(a.age);
  const ageB = Number(b.age);
  if (ageA < ageB) {
    return -1;
  }
  if (ageA > ageB) {
    return 1;
  }
  // ages must be equal
  return 0;
});
console.log(array);

// b. filter by age
const filtered = array.filter((x) =>  50 > Number(x.age) );
console.log(filtered)

// c. change "occupation" key and increment age by 1
const mapped = array.map((x) => {
  return {
	key: x.occupation,
	age: (Number(x.age) + 1).toString()
  }
});
console.log(mapped);

// calculate sum of ages
// d.1 map age string to number
const numberArray = array.map((x) => {
  return {
	id: x.id,
	name: x.name,
	key: x.occupation,
	age: Number(x.age)
  }
});
console.log(numberArray);
// d.2 reduce to sum ages
const redArray = numberArray.reduce((a, b) => {
  return {
    age: a.age + b.age
  }  
});
console.log(redArray);
redArray.age
// e. average
redArray.age/array.length

// Part 3. I asked chatGPT for help on this one. Must be a better way.
function incrAge(object) {
	if(typeof object.age !== 'number') {
		object.age = 0;
	}
	object.age = object.age + 1;
	object.updated_at = new Date();
	return object
}
let objectOne = {
	age: 0, 
	updated_at: Date()
}
let objectUpdated =incrAge(objectOne);


