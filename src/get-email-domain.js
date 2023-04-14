const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
<<<<<<< HEAD:src/st-get-email-domain.js
export default function getEmailDomain(email) {
  const atIndex = email.lastIndexOf('@');
  return email.slice(atIndex + 1);
=======
function getEmailDomain(/* email */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/get-email-domain.js
}

module.exports = {
  getEmailDomain
};
