const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let macStr = n.toString();
  if( macStr.length !== 17){
    return false;
  };
  for(let i = 2; i < 16; i += 3){
    if( macStr.charAt(i) !== '-'){
      return false;
    };
  };
  if(macStr.charCodeAt(0) !== macStr.charCodeAt(1)){
    return false;
  };
  return true;
}
module.exports = {
  isMAC48Address
};
