const fs = require('fs');

fs.appendFile('test.txt', "\nHello World", function (err) {
    if (err) { throw err };
    console.log("File Updated!")
})