const closestSum = require('./nearestSum')

describe('check function to find nearest sum',()=>{
    const Array = [1, -2, 5, -6, 2, 9, -4, 7, 12, -10, 5];
    const getSum = closestSum(Array,9)
    test('should return Number in output ', () => {
      expect(typeof getSum).toBe('number');
    })
    test('should return 8 in output if input is 9', () => {
      expect(getSum).toBe(8);
    })   
})