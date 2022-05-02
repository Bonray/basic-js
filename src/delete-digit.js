const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = [];
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    arr.push(+str.replace(str[i], ''));
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

module.exports = {
  deleteDigit
};
