const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let comparArr = [];
  let digitArr = n.toString().split('');
  for(let i = 0; i < digitArr.length; i++){
    let arr1 = n.toString().split('');;
    arr1.splice(i, 1);
    comparArr.push(arr1.join(''));    
  }
  return Number(comparArr.sort((a, b) => b - a)[0]);
}

module.exports = {
  deleteDigit
};
