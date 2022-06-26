/* Regex Methods: 
Match(); 
Test(); 
Exec(); */

/* Regex Modifiers: 
i = Perform case-insensitive matching
g = Perform a global match
m = Perform multiline matching */

/* Metacharacters: 
\d = Find a digit
\w = Find characters from string
\b = Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b */

/* Quantifiers:
n+ = Matches any string that contains at least one n
n* = Matches any string that contains zero or more occurrences of n
n? = Matches any string that contains zero or one occurrences of n */

// Using Match() Method
/* let myString = "I am a software automation engineer";
let value = myString.match(/Software/i);
console.log(value);
console.log(value[0]); */

// Using Test Method (Boolean)
/* let myString = "I am a software automation engineer";
let pattern = /Software/i;
let result = pattern.test(myString);
console.log(result); */

// Using Exec Method
/* let myString = "I am a software automation engineer";
let pattern = /Software/i;
let result = pattern.exec(myString);
console.log(result[0]);
console.log(result["index"]);
console.log(result["input"]); */

// Extract digits from string
let secretCode = "This is your secret code: 521467 don't share with this anybody";
let code = secretCode.match(/\d+/);
console.log(code[0]);

// Write a program to get price from a string
let myString = "core i7 x64 processor, price is 70000/- BDT TK"
let price = myString.match(/\d+/g);
console.log(price[2]);

// Write a program that will capitalize the first letter of each word in a string
let text = "hello world";
let pattern = /\w\S*/g;
let myText = text.match(pattern);
console.log(myText[0].charAt(0).toUpperCase() + myText[0].slice(1));
console.log(myText[1].charAt(0).toUpperCase() + myText[1].slice(1));

// Password Validation
let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let password = "P@ssword123";
console.log(password_pattern.test(password))