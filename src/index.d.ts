import { TypeExec } from './libs/sh'

interface SHExecAPI {
  (tString: TemplateStringsArray, ...args: any[]): Promise<string>
  quiet: TypeExec
}

declare const SHExec: SHExecAPI
export = SHExec
