const input = require('prompt-sync')();

// Taking User Input is Always String Input
let min = parseInt(input('Input Min Range: '));
let max = parseInt(input('Input Max Range: '));

console.log(Math.floor(Math.random() * (max - min) + min))
