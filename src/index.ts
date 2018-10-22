import shExec from './libs/sh'

const sh = shExec()

export default sh

exports = sh
exports.quiet = shExec({ quiet: true })
