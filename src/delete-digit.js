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
<<<<<<< HEAD:src/st-delete-digit.js
export default function deleteDigit(n) {
  const nStr = n.toString();
  let maxNum = 0;
  
  for (let i = 0; i < nStr.length; i++) {
    const num = parseInt(nStr.substring(0, i) + nStr.substring(i + 1));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  
  return maxNum;
}
=======
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/delete-digit.js
