const spiralFunction = require('./spiralArrayMatrix')

describe('test to checek spiral execution of matrix',()=>{
    const matrix = [[1,2,3],[4,5,6],[7,8,9]];
    const spiralMatrix = spiralFunction(matrix); 
    test('should return array(object) in output', () => {
      expect(typeof spiralMatrix).toBe('object')
    })
    test('1st element should be 1 ', () => {
      expect(spiralMatrix[0]).toBe(1)
    })
    test('2nd element should be 2 ', () => {
      expect(spiralMatrix[1]).toBe(2)
    })
    test('3rd element should be 3 ', () => {
      expect(spiralMatrix[2]).toBe(3)
    })   
    test('4th element should be 6 ', () => {
      expect(spiralMatrix[3]).toBe(6)
    })   
    test('5th element should be 9 ', () => {
      expect(spiralMatrix[4]).toBe(9)
    })   
    test('6th element should be 8 ', () => {
      expect(spiralMatrix[5]).toBe(8)
    })   
    test('7th element should be 7 ', () => {
      expect(spiralMatrix[6]).toBe(7)
    })   
    test('8th element should be 4 ', () => {
      expect(spiralMatrix[7]).toBe(4)
    })   
    test('9th element should be 5 ', () => {
      expect(spiralMatrix[8]).toBe(5)
    })    
})