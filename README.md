<p align="center">
  <img src="./logo.png" width="128" />
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/sh-exec">
    <img src="https://img.shields.io/npm/v/sh-exec.svg?style=flat-square&" />
  </a>
  <a href="https://travis-ci.org/rwu823/sh-exec" alt="Build Status">
    <img src="https://img.shields.io/travis/rwu823/sh-exec.svg?style=flat-square&" />
  </a>
  <a href="https://codecov.io/gh/rwu823/sh-exec" alt="Coverage">
    <img src="https://img.shields.io/codecov/c/github/rwu823/sh-exec/master.svg?style=flat-square&" />
  </a>
  <img src="https://img.shields.io/github/license/rwu823/sh-exec.svg?style=flat-square&" />
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
