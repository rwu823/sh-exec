type TString = {
  (tString: TemplateStringsArray, ...vars: any[]): string
}

const tStrings: TString = (tStrings, ...vars) =>
  tStrings.reduce(
    (s, v, i) => s + v + (vars[i] !== undefined ? vars[i] : ''),
    '',
  )

export default tStrings
