const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
<<<<<<< HEAD
export default function repeater(str, options) {
  // Set default values for options
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  // Create an array of repeated additions
  const repeatedAdditions = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // Create an array of repeated strings with additions
  const repeatedStrings = Array(repeatTimes)
    .fill(str + repeatedAdditions)
    .join(separator);

  return repeatedStrings;
}
=======
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e
