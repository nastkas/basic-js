const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
<<<<<<< HEAD:src/st-encode-line.js
export default function encodeLine(str) {
  let encoded = '';
  let currentChar = str[0];
  let currentCount = 1;
  
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      encoded += (currentCount === 1 ? '' : currentCount) + currentChar;
      currentChar = str[i];
      currentCount = 1;
    }
  }
  
  return encoded;
}
=======
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/encode-line.js
