const tStrings = (tStrings, ...vars) => {
  const forkArgs = Array.from(tStrings)

  vars.forEach((v, i) => {
    forkArgs[i] += v
  })

  const text = forkArgs.join('')

  return text
}

module.exports = tStrings
