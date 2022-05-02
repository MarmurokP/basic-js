const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const err = new Error('\'arr\' parameter must be an instance of the Array!');
  let adding = true;
  let transformedArr = [];  
 
  if(!Array.isArray(arr)){
    throw err;
  }
  
  arr.forEach((item, i) => {
    if(item === '--discard-next'){
      adding = false;
    } else if(item === '--discard-prev'){
      arr[i - 2] !== '--discard-next' ? transformedArr.pop() : transformedArr;
    }else if(item === '--double-next'){
     i !== arr.length - 1 ? transformedArr.push(arr[i + 1]) : transformedArr;
    }else if(item === '--double-prev'){
      if(arr[i - 2] !== '--discard-next'){
        i !== 0 ? transformedArr.push(arr[i - 1]) : transformedArr;
      }
         transformedArr;
    } else {
      adding === true ? transformedArr.push(item) : adding = true;
    }
  });
  return transformedArr;
}

module.exports = {
  transform
};
