const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatStr = '';
  let additionStr = '';
  let additionRepeat = options.additionRepeatTimes;
  let repeatTimes = options.repeatTimes;
  
  if(additionRepeat > 0){
    if(options.additionSeparator === undefined){
      options.additionSeparator = '|';
    }
    for(let i = 0; i < additionRepeat; i++){
      i === additionRepeat - 1 ? additionStr += `${options.addition}` : additionStr += `${options.addition}${options.additionSeparator}`;
    }
  }

  if(repeatTimes === undefined && options.addition !== undefined){
    repeatStr += `${str}${options.addition}`
  }

  if(additionRepeat === undefined && options.addition !== undefined){
    if(options.additionSeparator === undefined){
      options.additionSeparator = '|';
    }
    additionStr = options.addition;
  }

  for(let i = 0; i < repeatTimes; i++){
    if(options.separator === undefined){
      options.separator = '+'
    }    
    i === repeatTimes - 1 ? repeatStr += `${str}${additionStr}` : repeatStr += `${str}${additionStr}${options.separator}`;
  }
  return repeatStr;
}

module.exports = {
  repeater
};
