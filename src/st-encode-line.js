import { NotImplementedError } from '../extensions/index.js';

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