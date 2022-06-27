// Quotes
let message = "\"Hello World\""
console.log(message)

// Backslash
let speech = "\"Hello \\ World\""
console.log(speech)

// Double Quotes
let quotes = "\"Hello \"World\""
console.log(quotes)

// Apostrophe
let apostrophe = "I\'m"
console.log(apostrophe)

var myString = "I am a Software Automation Engineer";

// Finding Length
console.log("Total Characters: " + myString.length);

// Return index if found
console.log(myString.search("Software"))
console.log(myString.indexOf("Software"))

// Return extracted string
console.log(myString.slice(7, 11))
console.log(myString.substring(7, 15))
myString.substr(7, 8);

// Convert to small case
console.log(myString.toLocaleLowerCase())

// Convert to capital case
console.log(myString.toUpperCase())

// Replace by new string
console.log(myString.replace("Software", "Replace"))

// Concat
let firstName = "School";
let lastName = "College";
console.log(firstName.concat(" & ", lastName))

// Remove extra white space characters
let myVar = "           Hello World";
console.log(myVar.trim())

// Return space count
console.log(myVar.split(" ".length - 1))

// Return array
let location = "d:\\personal\\projects\\javascript\\project";
console.log(location.split("\\")[4])

// Write a program that will capitalize the first letter of each word in a string.
let string = "Hello Friends";
let array = string.split(" ");
array.forEach(element => {
    console.log(element.charAt(0).toUpperCase() + element.slice(1))
});