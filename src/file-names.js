const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesMap = new Map();
  const uniqNames = [];
  names.forEach((fileName) => {
   if(namesMap.has(fileName)){
     const k = namesMap.get(fileName) + 1;
     const uniqName = `${fileName}(${k})`;
     uniqNames.push(uniqName);
     namesMap.set(fileName, k);
     namesMap.set(uniqName, 0)
   } else {
     uniqNames.push(fileName);
     namesMap.set(fileName, 0);
   }
  });
  return uniqNames;
}

module.exports = {
  renameFiles
};
