const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
<<<<<<< HEAD:src/st-sort-by-height.js
export default function sortByHeight(arr) {
  const sortedHeights = arr.filter(h => h !== -1).sort((a, b) => a - b);
  return arr.map(h => h === -1 ? h : sortedHeights.shift());
}
=======
function sortByHeight(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/sort-by-height.js
