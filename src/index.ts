import shExec from './libs/sh'

const sh = shExec()

export default sh

module.exports = sh
module.exports.quiet = shExec({ quiet: true })
