#!/usr/bin/env node
const nameSorter = require('./src/nameSorter');
const readFile = require('./utils/readFile');
const writeFile = require('./utils/writeFile');

const [,, args] = process.argv; // destructuring process.argv to get args variable (source file path given in starting command)

const names = readFile(args); // run readFile function to get the item from the file in array with source file path as input
const sortedNames = nameSorter(names); // run sorter function with array of names as input
writeFile(sortedNames, 'sorted-names-list.txt'); // run writeFile function