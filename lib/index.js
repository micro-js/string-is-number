/**
 * Modules
 */

var isNumber = require('@f/is-number')

/**
 * Regexes
 */

var hexRe = /^0x[0-9a-f]+$/i
var numberRe = /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/

/**
 * Expose stringIsNumber
 */

module.exports = stringIsNumber

/**
 * stringIsNumber
 * @param {String} x string to check
 * @return {Boolean}
 */

function stringIsNumber (x) {
  if (isNumber(x)) return true
  if (hexRe.test(x)) return true;
  return numberRe.test(x);
}
