<<<<<<< HEAD:src/st-dns-stats.js

import { NotImplementedError } from '../extensions/index.js';
=======
const { NotImplementedError } = require('../extensions/index.js');
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/dns-stats.js

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
<<<<<<< HEAD:src/st-dns-stats.js
export default function getDNSStats(domains) {
  const stats = {};
  
  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split('.').reverse();
    let domain = '';
    
    for (let j = 0; j < domainParts.length; j++) {
      domain += '.' + domainParts[j];
      if (!stats[domain]) {
        stats[domain] = 0;
      }
      stats[domain]++;
    }
  }
  
  return stats;
}
=======
function getDNSStats(/* domains */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e:src/dns-stats.js
