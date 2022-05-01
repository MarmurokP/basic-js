const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let membersStr = [];
 members.forEach((isGood) => {
 if(typeof isGood === 'string'){  
 membersStr.push(isGood.trim().toUpperCase());
 };
 });
 let codeName = '';
 membersStr.forEach((char) => {   
   codeName += char[0];
 });
 return codeName.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
