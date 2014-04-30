
module.exports = variables

function variables(string, map) {
  return variables.replace(string, variables.parse(string, map))
}


/**
 * Parse all the declared variables and save it to `map`.
 */

variables.parse = function (string, map) {
  map = map || {}

  var RE_ROOT = /(?:^|\s|\}):root\s*\{[^\}]+\}/g
  var RE_VAR = /(?:^|\s|\{|;)--([\w-]+)\s*:\s*([^;\}]+)\s*[;\}]/g

  var m_root
  var m_var
  var root
  while (m_root = RE_ROOT.exec(string)) {
    root = m_root[0]
    while (m_var = RE_VAR.exec(root)) {
      map[m_var[1]] = m_var[2]
    }
  }

  return map
}

/**
 * Compile a regular expression for matching simple `var(<name)` statements
 */

variables.compile = function (map) {
  return new RegExp('\\bvar\\(\\s*--(' + Object.keys(map).join('|') + ')\\s*\\)', 'g')
}

/**
 * Replace all the var statements in a string with parsed `map`.
 */

variables.replace = function (string, map) {
  if (!map || !Object.keys(map).length) return string

  var RE_VARS = variables.compile(map)
  string = string.replace(RE_VARS, function (match, name) {
    return map[name] || match
  })

  var RE_FALLBACKS = /\bvar\(--([\w-]+)(?:\s*,\s*)?(.*)?\)/
  var m_fallback
  while (m_fallback = RE_FALLBACKS.exec(string))
    string = string.replace(m_fallback[0],
      map[m_fallback[1]] ? m_fallback[1] : m_fallback[2])

  return string
}
