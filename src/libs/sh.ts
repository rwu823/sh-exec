import { exec } from 'child_process'
import tStrings from '../utils/tStrings'

export type TypeExec = (
  tString: TemplateStringsArray,
  ...args: any[]
) => Promise<string>

type SHExec = (
  options?: Partial<{
    quiet: boolean
  }>,
) => TypeExec

const shExec: SHExec = (opts = {}) => (tString, ...args) =>
  new Promise((resolve, reject) => {
    const cmds = tStrings(tString, ...args)
    const child = exec(cmds, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      }
      const output = stderr || stdout

      resolve(output)
    })

    if (!opts.quiet) {
      child.stdout.on('data', console.log)
      child.stderr.on('data', console.log)
    }
  })

export default shExec
