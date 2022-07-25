const getMatching = require('./findMatching');

describe('test matching function',()=>{
    const Array = [-2, 1, 5, -10, 3, 12, -4];
    const getMatch = getMatching(Array,5); 
    test('should return 1 if match found ', () => {
      expect(getMatch).toBe(1);
    })
    const getMatch1 = getMatching(Array,30);
    test('should return 0 if match not found ', () => {
      expect(getMatch1).toBe(0);
    })
})