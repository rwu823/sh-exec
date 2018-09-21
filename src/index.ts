import shExec from "./libs/sh";

const sh = shExec()
const shSilent = shExec({ silent: true })

export default sh
exports = sh

export { shSilent }
