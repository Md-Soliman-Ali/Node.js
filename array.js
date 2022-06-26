// Object
let obj = {}

// Array Iteration
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(element => {
    console.log(element);
});

console.log();

// Array Methods (PUSH, POP, SHIFT, UNSHIFT)
let letters = ["A", "B", "C", "D"];
letters.push("E");
console.log(letters);
//console.log(letters[1]);
letters.pop();
console.log(letters);
letters.shift();
console.log(letters);
letters.unshift("A")
console.log(letters);

console.log();

// Replace Element From Array
letters[0] = "Z";
console.log(letters);

console.log();

// Delete Element From Array
letters.splice(1, 2);
console.log(letters);

console.log();

// Merging Array Elements
let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];

let number = evenNumbers.concat(oddNumbers);

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

console.log();

// Array Sort (Ascending Order)
console.log(number.sort());

// Find The Max & Min Number From Array
let array = [3, 7, 5, 1]
let sortedValue = array.sort();

let maxNumber = sortedValue[sortedValue.length - 1]
let minNumber = sortedValue[0];
console.log("Min Number is " + minNumber)
console.log("Max Number is " + maxNumber)

// Write a program that will find the input number is exists in array. If exists, print the array position. Otherwise print "not exists" in array.

const prompt = require('prompt-sync')();
let arrayValue = [1, 3, 5, 7];
let isExists = true.position;
let input = prompt("Input a number: ");

for (let i = 0; i < arrayValue.length; i++) {
    let value = array[i];
    if (value == input) {
        isExists = true;
        position = i;
        break;
    }
    else {
        isExists = false;
        position = "Null"
    }
}
console.log("Found: " + isExists + " Position is: " + position);
