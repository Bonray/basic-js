const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chainData: [],
  chain: '',
  
  renderChain() {
    this.chain = this.chainData.map((item, idx) => {
      if (idx === 0) return `( ${item} )`;
      else return `~~( ${item} )`;
    }).join('');
  },

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chainData.length;
  },

  addLink(val = '') {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chainData.push(val);
    this.renderChain();
    return this;
  },

  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!typeof position === 'number' || !Number.isInteger(position) || position < 1 || position > this.chainData.length) {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.chainData.splice(position - 1, 1);
    this.renderChain();
    return this;
  },

  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chainData.reverse();
    this.renderChain();
    return this;
  },

  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const chain = this.chain;
    this.chain = '';
    this.chainData = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
