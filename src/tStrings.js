const tStrings = (tstrings, ...vars) => {
  const forkArgs = Array.from(tstrings)

  vars.forEach((v, i) => {
    forkArgs[i] += v
  })

  const text = forkArgs.join('')

  return text
}

module.exports = tStrings
