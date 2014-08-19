
var fs = require('fs')
var assert = require('assert')

var variables = require('..')

function fixture(name) {
  return fs.readFileSync(__dirname + '/fixtures/' + name + '.css', 'utf8').trim()
}

function compare(name) {
  assert.equal(variables(fixture(name)), fixture(name + '.out'))
}

[
  'case-sensitive',
  'media-query',
  'substitution-defined',
  'substitution-fallback',
  'substitution-overwrite',
  '1',
].forEach(function (testname) {
  it(testname, function () {
    compare(testname)
  })
})
