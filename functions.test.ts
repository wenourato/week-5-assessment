const {shuffleArray} = require('./utils')


test('we should get an array back', () => {
    expect(shuffleArray).toEqual(
      expect.arrayContaining([])
    )
  })

  test('array matches', () => {
    shuffleArray.forEach((shuffleArray) => {
      expect(shuffleArray).toMatchSnapshot({
        createdAt: expect.any([])
      });
    });
  });