const fs = require('fs');

const writeFile = (items, fileName) => {
    const itemsInPlainText = items.join('\n'); // convert array to plain text
    fs.writeFile(fileName, itemsInPlainText, function (err) { // write file contains itemsInPlainText and save it in fileName
        if (err) return console.log(err); // log error when exists
        console.log(itemsInPlainText); // log message when operation succeed
    });
}

module.exports = writeFile;