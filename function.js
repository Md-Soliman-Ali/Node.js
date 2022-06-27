function hello(name = "TEST") {
    return "Hello! " + name;
}
console.log(hello())
console.log(hello("QA"))

function sayHello(name) {
    return "Hello! " + name;
}
console.log(sayHello("Sakib"))

// Anonymous Functions (ES6)   
let test = function () {
    return "TEST"
}
console.log(test())

// Callback Function
const message = function () {
    console.log("This message is shown after 3 seconds")
}
setTimeout(message, 3000);

// Callback Function
setTimeout(function () {
    console.log("This message is shown after 3 seconds")
}, 3000);

// Self calling function
let person = {
    firstName: "Abdur",
    lastName: "Rahim"
};

(function () {
    console.log(person.firstName)
})();

// Arrow function
let sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(10, 20))

// Arrow function
let mul = (num1, num2) => num1 * num2;
console.log(mul(10, 20))

// Arrow function
let QA = () => "QA";
console.log(QA())

// exports for calling function from another page
module.exports = (year) => {
    if (year % 4 == 0 || year % 100 == 0) {
        return "This is LeapYear";
    }
    else {
        return "Not LeapYear";
    }
}
