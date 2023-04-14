const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
<<<<<<< HEAD
const obj = {
  chain: [],
=======
const chainMaker = {
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value === undefined ? ' ' : value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

<<<<<<< HEAD
export default obj;




  
=======
module.exports = {
  chainMaker
};
>>>>>>> 74bc7d543985dd5ab5e8a836d6ad567edd83fe3e
