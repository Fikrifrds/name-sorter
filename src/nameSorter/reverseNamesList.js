const reverseNamesList = (namesList) => {
    return namesList.map((name) => name.split(' ').reverse().join(' ')); // reverse every name in the list
}

module.exports = reverseNamesList;