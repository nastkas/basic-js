const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
<<<<<<< HEAD:src/st-matrix-elements-sum.js
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  
  // iterate through columns
  for (let j = 0; j < matrix[0].length; j++) {
    // iterate through rows, starting from the top
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) {
        // if a 0 is encountered, break out of the loop for this column
        break;
      }
      sum += matrix[i][j]; // add up the value to the sum
    }
  }
  
  return sum;
}
=======
function getMatrixElementsSum(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/matrix-elements-sum.js
