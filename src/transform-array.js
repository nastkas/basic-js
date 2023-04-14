const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
<<<<<<< HEAD
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (result.length && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }

  return result;
}
=======
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e
