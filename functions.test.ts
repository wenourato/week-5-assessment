const {shuffleArray} = require('./utils')


test('we should get an array back', () => {
    expect(shuffleArray).toEqual(
      expect.arrayContaining([])
    )
  })

//   test('array matches', () => {
//     shuffleArray.forEach((shuffleArray) => {
//       expect(shuffleArray).toMatchSnapshot({
//         createdAt: expect.any([])
//       });
//     });
//   });

// test('Should pass array  length', () => {
//     const result = shuffleArray()
    
//     expect(result).toBeInstanceOf()
    

// })