const sorter = require('./sorter');
const reverseNamesList = require('./reverseNamesList');

const nameSorter = (namesList) => {
    const reversedNamesList = reverseNamesList(namesList); // run reverseNamesList function to reverse every name in the list
    const sortedNamesList = sorter(reversedNamesList); // run sorter function with reversed names list as input
    return reverseNamesList(sortedNamesList); // restore the reversed names list to its original and return that as result
}

module.exports = nameSorter;