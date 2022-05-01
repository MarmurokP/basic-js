const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  matrix[0].forEach(el => {
    if(el > 0){
      count += el;
    };
  });
  for(let i = 1; i < matrix.length; i++){
    matrix[i].forEach((el, index) => {
      if(el > 0 && matrix[i - 1][index] > 0){
        count += el;
      };
    });
  };
  return count;
}

module.exports = {
  getMatrixElementsSum
};
