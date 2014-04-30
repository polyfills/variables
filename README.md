# CSS Variables

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
