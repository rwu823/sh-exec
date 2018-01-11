const { exec } = require('child_process')
const tStrings = require('./tStrings')

const sh = (...args) =>
  new Promise(resolve => {
    const cmds = tStrings(...args)
    const child = exec(cmds, (err, stdout, stderr) => {
      if (err) {
        throw new Error(err)
      }
      const output = stderr || stdout

      resolve(output)
    })

    child.stdout.on('data', console.log)
    child.stderr.on('data', console.log)
  })

module.exports = sh
