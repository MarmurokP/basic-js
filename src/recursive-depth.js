const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
 
  calculateDepth(arr) {
    let count = 1;
    let innerArr = false;
    arr.forEach((el) => {
      if(Array.isArray(el)){
        innerArr = true;
      }
    });      
      if(innerArr === true){        
      let arr1 = arr.reduce((acc, cur) => acc.concat(cur), []);
      return count + this.calculateDepth(arr1);
      }  
    return count;
  }
}

module.exports = {
  DepthCalculator
};
