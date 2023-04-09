import { NotImplementedError } from '../extensions/index.js';

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