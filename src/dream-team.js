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
<<<<<<< HEAD
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const names = members.filter((name) => typeof name === 'string');

  const initials = names.map((name) => {
    const trimmedName = name.trim();
    return trimmedName[0].toUpperCase();
  });

  const sortedInitials = initials.sort();

  return sortedInitials.join('');
}
=======
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e
