const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let uniqChars = [...new Set(s1)];
  let count = 0;
  uniqChars.forEach(el => {
    let s1num = s1.split(el).length-1;
    let s2num = s2.split(el).length-1;
    if(s1num === 0 || s2num === 0){
      count += 0;
    }else {
      s1num <= s2num ? count += s1num : count += s2num;
    };
  });
  return count;
}

module.exports = {
  getCommonCharacterCount
};
