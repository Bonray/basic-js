const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  };
  const set = new Set(str.split(''));
  const arr = Array.from(set);
  return arr.map(char => `${map[char]}${char}`).join('');
}

module.exports = {
  encodeLine
};
