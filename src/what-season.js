const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (!date) return 'Unable to determine the time of year!';
  if (typeof date !== 'object') throw new Error('Invalid date!');
  if (date instanceof Date) throw new Error('Invalid date!');
  if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) throw new Error('Invalid date!');

  const month = date.getMonth();
  if (month === 2 || month === 3 || month === 4) return 'spring';
  if (month === 5 || month === 6 || month === 7) return 'summer';
  if (month === 8 || month === 9 || month === 10) return 'fall';
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (/[2-4]/.test(month)) return 'spring';
  if (/[5-7]/.test(month)) return 'summer';
  if (/[8-10]/.test(month)) return 'fall';
  if (/\b[0-1]|\b11\b\b/.test(month)) return 'winter';
}

module.exports = {
  getSeason
};
