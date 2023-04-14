const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
<<<<<<< HEAD:src/st-file-names.js
export default function renameFiles(names) {
  const result = [];

  for (const name of names) {
    let newName = name;
    let count = 1;

    while (result.includes(newName)) {
      newName = `${name}(${count++})`;
    }

    result.push(newName);
  }

  return result;
}
=======
function renameFiles(/* names */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/file-names.js
