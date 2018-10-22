<h1 align="center">
  <img src="./logo.png" width="128" />
</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/sh-exec">
    <img src="https://flat.badgen.net/npm/v/sh-exec" />
  </a>
  <a href="https://circleci.com/gh/rwu823/sh-exec" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/rwu823/sh-exec/master" />
  </a>
  <a href="https://codecov.io/gh/rwu823/sh-exec" alt="Coverage">
    <img src="https://flat.badgen.net/codecov/c/github/rwu823/sh-exec" />
  </a>
  <img src="https://flat.badgen.net/github/license/rwu823/sh-exec" />
</p>
## Why sh-exec?

Use `Template literals` write shell script made happy ❤️.

## Installation

```sh
$ yarn add sh-exec
```

## Examples

```js
import sh from 'sh-exec'
import { version } from '../package.json'

sh`
echo "sh-exec is awesome."
`

sh`
git init
git add .
git commit -m '${version}'
`
```

## Quiet

If you don't like to see the command output or because some security issue.

It's helpful in CI.

```js
import sh from 'sh-exec'

sh.quiet`echo "You can't see"`
```

## Promise Based

```js
sh`
  curl https://a-url.com
`
  .then(stdout => {
    console.log('done')
  })
  .catch(err => {
    console.error(err)
  })

// or
;(async () => {
  const stdout = await sh`
    curl https://a-url.com
  `
})()
```
