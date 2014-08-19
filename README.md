# CSS Variables

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

A pure regexp-replace version of [rework-vars](https://github.com/reworkcss/rework-vars).
Differences are:

- It doesn't use `rework` or parse the CSS AST
- It does not remove variable declarations
- It is much less robust
- It does not throw error messages

Like `rework-vars`, it only implements a subset of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

## API

```js
var variables = require('variables')
```

### css = variables(css)

Do CSS variables magic.

### map = variables.parse([map])

Parse CSS variables on `:root`,
storing the variable values in `map`.
Variable names do not include the leading `--`s.

### re = variables.compile(map)

Compile a regular expression for matching `var(--<name>)`s with `name`s given from `map`.
This regular expression do not match `var()`s with fallbacks.

### css = variables.replace(css, map)

Replace variables in `css` with a variable `map`.

[npm-image]: https://img.shields.io/npm/v/variables.svg?style=flat-square
[npm-url]: https://npmjs.org/package/variables
[github-tag]: http://img.shields.io/github/tag/polyfills/variables.svg?style=flat-square
[github-url]: https://github.com/polyfills/variables/tags
[travis-image]: https://img.shields.io/travis/polyfills/variables.svg?style=flat-square
[travis-url]: https://travis-ci.org/polyfills/variables
[coveralls-image]: https://img.shields.io/coveralls/polyfills/variables.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/polyfills/variables?branch=master
[david-image]: http://img.shields.io/david/polyfills/variables.svg?style=flat-square
[david-url]: https://david-dm.org/polyfills/variables
[license-image]: http://img.shields.io/npm/l/variables.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/variables.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/variables
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
