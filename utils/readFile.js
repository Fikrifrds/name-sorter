const fs = require('fs');

const readFile = (args) => {
    let data = '';
    try {
        data = fs.readFileSync(args, 'utf8'); // run readFile method from fs module to read file from given path in starting command
    } catch (err) {
        if (err.code === 'ENOENT') { // condition when file is not exist
            console.log('File not found!');
        } else {
            throw err;
        }
    }
    const names = data.split('\n'); // convert plain text to array
    return names;
};

module.exports = readFile;