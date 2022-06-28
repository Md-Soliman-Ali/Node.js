/*
const fs = require('fs');

fs.readFile('test.txt', function (err, read) {
    if (err) throw err;
    console.log(read.toString());
});
*/

// Read data from file with key value pair
require('dotenv').config();

const projectName = process.env.PROJECT_NAME;
console.log(projectName);