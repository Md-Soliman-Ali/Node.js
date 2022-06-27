// Accessing object from another page
/* var { student } = require("./jsObject");
console.log(student[0].ID) */

// Read data from json file
/* var myJson = require("./jsObject.json");
console.log(myJson[1].ID) */

// Write data in json file
const fs = require("fs");
const path = require("path");

const userDB = path.join(__dirname, "./jsObject.json");   // Locate the data file
const userData = fs.readFileSync(userDB);   // Read data from data file
const userObj = JSON.parse(userData);   // JSON.parse (Parsing json data to json object) 
console.log(userObj)

let student = {
    Name: 'GHI',
    ID: 8573,
    Class: 12,
    Section: 'C'
}

userObj.push(student);
console.log(userObj)

fs.writeFileSync(userDB, JSON.stringify(userObj));    // JSON.stringify (Parse json object to json data) 

// JSON Data Update
var JsonData = require("./jsObject.json");
JsonData[3].Name = "XYZ"

fs.writeFileSync("./jsObject.json", JSON.stringify(JsonData));     // JSON.stringify (Parse json object to json data)
