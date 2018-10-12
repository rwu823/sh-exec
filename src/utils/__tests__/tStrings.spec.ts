import tStrings from '../tStrings'

describe('tStrings Spec', () => {
  it('tStrings to long text', () => {
    expect(tStrings`hello world`).toBe('hello world')
  })

  it('tStrings to long text with variable', () => {
    const word = 'world'
    expect(tStrings`hello ${word}`).toBe('hello world')
  })
})
