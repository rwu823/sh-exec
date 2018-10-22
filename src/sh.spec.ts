import sh from '../out'

describe('Test sh-exec Spec', () => {
  it('test normal mode', async () => {
    const hello = await sh`echo hello`

    expect(hello).toBe('hello\n')
  })

  it('test quiet mode', async () => {
    const hello = await sh.quiet`echo "hello"`

    expect(hello).toBe('hello\n')
  })
})
