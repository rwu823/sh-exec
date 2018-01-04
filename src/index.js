const { exec } = require('child_process')
const tStrings = require('./tStrings')

const sh = (...args) =>
  new Promise((resolve) => {
    const cmds = tStrings(...args)
    exec(cmds, (err, stdout, stderr) => {
      if (err) {
        throw new Error(err)
      }
      const output = stderr || stdout

      console.log(output)
      resolve(output)
    })
  })

module.exports = sh
