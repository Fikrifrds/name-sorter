const fs = require('fs');
const nameSorter = require('../src/nameSorter');
const unSortedNamesListInArray = require('./unSortedNameListInArray');
const sortedNamesListInArray = require('./sortedNamesListInArray');
const writeFile = require('../utils/writeFile');
const loggedFile = require('./loggedFile');

describe('Name Sorting', () => {
  test('sort empty array', () => {
    expect(nameSorter([])).toEqual([]);
  });

  test('sort array of names with one element', () => {
    expect(nameSorter(['John'])).toEqual(['John']);
  });

  test('sort array of names with more than one elements ascendingly', () => {
    expect(nameSorter(unSortedNamesListInArray)).toEqual(sortedNamesListInArray);
  });
});

describe('Write File', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  test('write file and result to console', () => {
    const logSpy = jest.spyOn(console, 'log');
    let writeFileCallback;
    jest.spyOn(fs, 'writeFile').mockImplementation((path, options, callback) => {
      writeFileCallback = callback;
    });
    writeFile(sortedNamesListInArray, 'sorted-names-list.txt',);
    writeFileCallback(null, loggedFile);
    expect(logSpy).toBeCalledWith(loggedFile);
    expect(fs.writeFile).toBeCalledWith('sorted-names-list.txt', loggedFile, writeFileCallback);
  });
});
