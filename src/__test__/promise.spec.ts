describe('promise rejection', () => {
  it('should be catch', done => {
    // expect.assertions(1)
        Promise.resolve('promised value').then(() => {
            expect(0).toBe(0)
            done()
        })
  })
})
