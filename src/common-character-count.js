const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = 0;

  const map1 = {};
  const map2 = {};
  for (let char of s1) {
    map1[char] = map1[char] + 1 || 1; 
  }
  for (let char of s2) {
    map2[char] = map2[char] + 1 || 1; 
  }
  const keys1 = Object.keys(map1);
  const keys2 = Object.keys(map2);
  console.log(keys1, keys2)
  if (keys1.length > keys2.length) {
    for (let key of keys1) {
      if (map1[key] && keys2.includes(key) && map2[key]) res += Math.min(map1[key], map2[key]);
    }
  } else {
    for (let key of keys2) {
      if (map2[key] && keys1.includes(key) && map1[key]) res += Math.min(map1[key], map2[key]);
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
