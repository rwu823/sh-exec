const { exec } = require('child_process')
const tStrings = require('./tStrings')

const sh = (...args) => {
  const cmds = tStrings(...args)

  exec(cmds, (err, stdout, stderr) => {
    if (err) {
      throw new Error(err)
    }

    console.log(stderr || stdout)
  })
}

module.exports = sh
