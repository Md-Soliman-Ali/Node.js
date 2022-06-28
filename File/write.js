const fs = require('fs');

fs.writeFile('test.txt', 'Hello Node.JS', function (err) {
    if (err) { throw err };
    console.log("File Saved!");
});