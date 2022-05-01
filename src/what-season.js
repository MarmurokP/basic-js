const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(Object.prototype.toString.call(date) !== '[object Date]'){
    return 'Unable to determine the time of year!';
  };
  
  let month = date.getMonth();
  
  if(month === 0 || month === 1 || month === 11){
    return 'winter';
  }else if(month > 1 && month < 5){
    return 'spring';
  }else if(month > 4 && month < 8){
    return 'summer';
  }else if(month > 7 && month < 11){
    return 'fall';
  }else if(!month){
    return 'Invalid date!';
  };
}

module.exports = {
  getSeason
};
