/**
 * Imports
 */

var stringIsNumber = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work with numbers, string numbers, and hex', function (t) {
  t.ok(stringIsNumber(1))
  t.ok(stringIsNumber('1'))
  t.ok(stringIsNumber('1.1'))
  t.ok(stringIsNumber('0xffffff'))
  t.end()
})

test('should not call words numbers', function (t) {
  t.notOk(stringIsNumber('woot'))
  t.notOk(stringIsNumber('1woot'))
  t.end()
})
