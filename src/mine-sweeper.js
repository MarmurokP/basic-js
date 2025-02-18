const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array(matrix.length).fill([]).map(() => Array(matrix[0].length).fill(0));
    
  matrix.forEach((row, rowIndex) => {   
      row.forEach((cell, cellIndex) => {
        if(cell === true){
          const startX = cellIndex - 1 >= 0 ? cellIndex - 1 : 0;
          const endX = cellIndex + 1 >= row.length ? row.length - 1 : cellIndex + 1;
  
          const startY = rowIndex - 1 >= 0 ? rowIndex - 1 : 0;
          const endY = rowIndex + 1 >= matrix.length ? matrix.length - 1 : rowIndex + 1;
          
          for(let i = startX; i <= endX; i++){          
            for(let j = startY; j <= endY; j++){
              result[j][i] = matrix[j][i] === true ?  1 : result[j][i] + 1;
            }
          }
        }      
      });
    });  
  
    return result;
}

module.exports = {
  minesweeper
};
