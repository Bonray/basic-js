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
 function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const addition = options.addition ? options.addition : '';
  const separator = options.separator ? options.separator : '+';
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 0;
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0;
  let res = '';
  let additionStr = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i === additionRepeatTimes) additionStr += `${addition}${additionSeparator}`;
    else additionStr += `${addition}${additionSeparator}`;
  }
  console.log(additionStr);
  for (let i = 0; i < repeatTimes; i++) {
    if (i === repeatTimes - 1) res += `${str}${additionStr}`;
    else res += `${str}${additionStr}${separator}`;
  }
  return res;
}

module.exports = {
  repeater
};
