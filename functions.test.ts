const {shuffleArray} = require('./utils')

const Arr = [2,4,6,8]

describe('shuffleArray should', () => {
    test('Make sure that shuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray(Arr))).toBe(true);
        
    })

    it('should return an array of the same length as the argument sent in', () => {
        expect(shuffleArray(Arr)).toHaveLength(4)
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
    

})